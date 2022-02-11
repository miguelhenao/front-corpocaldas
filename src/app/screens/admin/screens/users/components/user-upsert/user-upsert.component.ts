import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { noWhitespaceValidator } from '../../../../../../helpers/validators/no-whitespace';
import { FormErrorMessageService } from '../../../../../../services/form-error-message.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss']
})
export class UserUpsertComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(public formErrorMessageService: FormErrorMessageService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required, noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      enabled: [true, Validators.required],
      lastname: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['admin', Validators.required],
      username: ['', Validators.required]
    });
  }

  save(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      // eslint-disable-next-line no-console
      console.log(this.formGroup);
    }
  }
}
