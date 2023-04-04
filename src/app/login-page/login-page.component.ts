import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  register: boolean = false;

  showRegisterForm() {
    this.register = true;
  }

  showLoginForm() {
    this.register = false;
  }

}
