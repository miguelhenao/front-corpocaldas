/* eslint-disable no-console */
/* eslint-disable rxjs/no-implicit-any-catch */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { UsersService } from '../../services/users.service';
import * as actions from './actions';

@Injectable()
export class UsersEffects {
  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.CreateRequested),
      exhaustMap(action =>
        this.usersService.create(action.user).pipe(
          map(user => actions.CreateSuccess({ user, message: this.createMessage })),
          catchError(error => of(actions.CreateFail(error)))
        )
      )
    );
  });

  read$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ReadRequested),
      exhaustMap(action =>
        this.usersService.read(action.id).pipe(
          map(user => actions.ReadSuccess({ user })),
          catchError(error => of(actions.ReadFail({ error: error })))
        )
      )
    );
  });

  list$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ListRequested),
      exhaustMap(() =>
        this.usersService.list().pipe(
          map(users => actions.ListSuccess({ users })),
          catchError(error => of(actions.ListFail(error)))
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.UpdateRequested),
      exhaustMap(action =>
        this.usersService.update(action.user).pipe(
          map(id => actions.UpdateSuccess({ id, message: this.updateMessage })),
          catchError(error => of(actions.UpdateFail(error)))
        )
      )
    );
  });

  success$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.CreateSuccess, actions.UpdateSuccess),
        tap(action => console.log(action.message))
      );
    },
    { dispatch: false }
  );

  failure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.CreateFail, actions.UpdateFail, actions.ListFail, actions.ReadFail),
        tap(action => console.log(action.error))
      );
    },
    { dispatch: false }
  );

  private createMessage = 'Creado';
  private updateMessage = 'Actualizado';

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
