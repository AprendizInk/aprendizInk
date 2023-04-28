import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private userService: UserServiceService, private form: FormsModule, private router: Router) { }

  ngOnInit(): void {
      
  }

  public onSubmit(): void {
    this.userService.authenticate(this.email, this.password);
  }

}
