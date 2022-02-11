import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserUpsertComponent } from './components/user-upsert/user-upsert.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private dialog: MatDialog) {}

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(UserUpsertComponent, {
      autoFocus: false,
      disableClose: true,
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // eslint-disable-next-line no-console
      console.log(result);
    });
  }
}
