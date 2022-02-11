import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ValidationMessage } from '../helpers/constants/validation-message';
import { AbstractControlErroCode } from '../helpers/enums/abstract-control-error-code';

type ErrorMessage = {
  key: AbstractControlErroCode;
  message: (ac: AbstractControl) => string;
};

@Injectable({
  providedIn: 'root'
})
export class FormErrorMessageService {
  private errorMessages: ErrorMessage[] = [
    { key: AbstractControlErroCode.Email, message: () => ValidationMessage.email },
    { key: AbstractControlErroCode.NoWhitespace, message: () => ValidationMessage.noWhitespace },
    { key: AbstractControlErroCode.NotNumeric, message: () => ValidationMessage.notNumeric },
    { key: AbstractControlErroCode.Required, message: () => ValidationMessage.required }
  ];

  getErrorMessage(ac: AbstractControl): string | undefined {
    const error = this.errorMessages.find(item => ac.hasError(item.key));
    return error?.message(ac);
  }
}
