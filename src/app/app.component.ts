import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public isAuthenticated: boolean = false;
  title = 'aprendizInk';

  constructor(private userService: UserServiceService, private router: Router) { }

  public ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/main'])
      }
      this.isAuthenticated = isAuthenticated;
    }); 
  }
}
