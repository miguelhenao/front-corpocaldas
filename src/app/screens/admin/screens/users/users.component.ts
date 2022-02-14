/* eslint-disable ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { UserPayload } from '../../../../helpers/classes/user';
import { selectAllUsers, selectUsersIsLoading } from '../../../../root-store/user/selectors';
import * as userActions from '../../../../root-store/user/actions';
import { UserUpsertComponent, UserUpsertModalData } from './components/user-upsert/user-upsert.component';
import { UpsertType } from '../../../../helpers/enums/upsert-type';

@UntilDestroy()
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUsers$: Observable<UserPayload[]> = this.store.select(selectAllUsers);
  isLoading$: Observable<boolean> = this.store.select(selectUsersIsLoading);

  constructor(private store: Store, private actions$: Actions, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(userActions.ListRequested());
    this.actions$.pipe(ofType(userActions.UpdateSuccess), untilDestroyed(this)).subscribe(action => {
      this.store.dispatch(userActions.ReadRequested({ id: action.update.id as number }));
    });
  }

  openUpsertModal(): void {
    const config: MatDialogConfig<UserUpsertModalData> = {
      data: {
        user: {} as UserPayload,
        upsertType: UpsertType.New
      }
    };
    this.dialog.open(UserUpsertComponent, config);
  }
}
