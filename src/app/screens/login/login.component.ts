import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor() {}

  onLogin(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      // eslint-disable-next-line no-console
      console.log(this.loginForm.value);
    }
  }
}
