import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isAuthenticated: boolean = false;
  register: boolean = false;

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  showRegisterForm() {
    this.register = true;
  }

  showLoginForm() {
    this.register = false;
  }

}
