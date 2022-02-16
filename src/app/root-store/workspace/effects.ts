/* eslint-disable no-console */
/* eslint-disable rxjs/no-implicit-any-catch */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap } from 'rxjs/operators';

import { WorkSpaceRequestPayload } from '../../helpers/classes/workspace';
import { WorkspaceService } from '../../services/workspace.service';
import * as actions from './actions';

@Injectable()
export class WorkspacesEffects {
  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.CreateRequested),
      exhaustMap(action =>
        this.workSpacesService.create(action.workspace).pipe(
          map(workspace => actions.CreateSuccess({ workspace, message: this.createMessage })),
          catchError(error => of(actions.CreateFail(error)))
        )
      )
    );
  });

  read$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ReadRequested),
      exhaustMap(action =>
        this.workSpacesService.read(action.id).pipe(
          map(workspace => actions.ReadSuccess({ workspace })),
          catchError(error => of(actions.ReadFail({ error: error })))
        )
      )
    );
  });

  list$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ListRequested),
      exhaustMap(() =>
        this.workSpacesService.list().pipe(
          map(workspaces => actions.ListSuccess({ workspaces })),
          catchError(error => of(actions.ListFail(error)))
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.UpdateRequested),
      exhaustMap(action => {
        return this.workSpacesService.update(action.workspace).pipe(
          map(workspace => {
            const update: Update<WorkSpaceRequestPayload> = {
              id: workspace.id,
              changes: workspace
            };
            return actions.UpdateSuccess({
              update,
              message: this.updateMessage
            });
          }),
          catchError(error => of(actions.UpdateFail(error)))
        );
      })
    );
  });

  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.DeleteRequested),
      exhaustMap(action =>
        this.workSpacesService.delete(action.id).pipe(
          mapTo(
            actions.DeleteSuccess({
              id: action.id,
              message: this.deleteMessage
            })
          ),
          catchError(error => of(actions.DeleteFail({ error })))
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
  private deleteMessage = 'Eliminado';

  constructor(private actions$: Actions, private workSpacesService: WorkspaceService) {}
}
