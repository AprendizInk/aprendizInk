import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/modules/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../../../assets/sass/modules/guest/components/login-form/login-form.component.scss']
})
export class LoginFormComponent {

  email!: string;
  password!: string;

  constructor() { }

  
}
