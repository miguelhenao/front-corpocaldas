import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserPayload } from '../../../../../../helpers/classes/user';
import { UpsertType } from '../../../../../../helpers/enums/upsert-type';
import * as actions from '../../../../../../root-store/user/actions';
import { UserUpsertComponent, UserUpsertModalData } from '../user-upsert/user-upsert.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() dataSource$!: Observable<UserPayload[]>;
  displayedColumns: string[] = ['id', 'name', 'email', 'enabled', 'actions'];

  constructor(private dialog: MatDialog, private store: Store) {}

  delete(user: UserPayload): void {
    this.store.dispatch(actions.DeleteRequested({ id: user.id }));
  }

  openUpdateModal(user: UserPayload): void {
    const config: MatDialogConfig<UserUpsertModalData> = {
      data: {
        user,
        upsertType: UpsertType.Edit
      }
    };
    this.dialog.open(UserUpsertComponent, config);
  }
}
