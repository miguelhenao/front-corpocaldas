import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { FormErrorMessageService } from '../../../../../../services/form-error-message.service';
import * as actions from '../../../../../../root-store/user/actions';
import { selectUsersIsSaving } from '../../../../../../root-store/user/selectors';
import { UserPayload } from '../../../../../../helpers/classes/user';
import { UpsertType } from '../../../../../../helpers/enums/upsert-type';

export type UserUpsertModalData = {
  user: UserPayload;
  upsertType: UpsertType;
};

@UntilDestroy()
@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss']
})
export class UserUpsertComponent implements OnInit {
  title = this.data.upsertType === UpsertType.New ? 'Agregar usuario' : 'Editar usuario';
  formGroup!: FormGroup;
  isSaving$ = this.store.select(selectUsersIsSaving);
  user: UserPayload;
  canEdit = this.data.upsertType !== UpsertType.New;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserUpsertModalData,
    public formErrorMessageService: FormErrorMessageService,
    private dialogRef: MatDialogRef<UserUpsertComponent>,
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions
  ) {
    this.user = data.user;
    this.formGroup = this.createFormGroup();
  }

  ngOnInit(): void {
    this.actions$.pipe(ofType(actions.CreateSuccess, actions.UpdateSuccess), untilDestroyed(this)).subscribe(() => {
      this.store.dispatch(actions.ListRequested());
      this.dialogRef.close();
    });
  }

  save(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      const user: UserPayload = { ...this.user, ...this.formGroup.value };
      const action = this.data.upsertType === UpsertType.New ? actions.CreateRequested : actions.UpdateRequested;
      this.store.dispatch(action({ user }));
    }
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      id: [{ value: this.user.id, disabled: this.canEdit }, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      enabled: [this.user.enabled || true, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      name: [this.user.name, Validators.required],
      password: [this.user.password, Validators.required],
      role: [this.user.role || 'admin', Validators.required],
      username: [this.user.username, Validators.required]
    });
  }
}
