import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserPayload } from '../../../../helpers/classes/user';
import { selectAllUsers } from '../../../../root-store/user/selectors';
import * as userActions from '../../../../root-store/user/actions';
import { UserUpsertComponent } from './components/user-upsert/user-upsert.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUsers$: Observable<UserPayload[]> = this.store.select(selectAllUsers);

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(userActions.ListRequested());
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(UserUpsertComponent, {
      autoFocus: false,
      disableClose: true,
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // eslint-disable-next-line no-console
      console.log(result);
    });
  }
}
