import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export interface ConfirmModalData {
  message: string;
  actionRequest: TypedAction<any>;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  message: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmModalData,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private store: Store
  ) {
    this.message = data.message;
  }

  onDelete(): void {
    this.store.dispatch(this.data.actionRequest);
    this.dialogRef.close();
  }
}
