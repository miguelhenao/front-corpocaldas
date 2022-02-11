import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  const isValid: boolean = (control.value || '').trim().length > 0;
  return isValid ? null : { noWhitespace: true };
}
