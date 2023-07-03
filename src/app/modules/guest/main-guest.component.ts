import { Component } from '@angular/core';

@Component({
  selector: 'app-main-guest',
  templateUrl: './template/main-guest.component.html',
  styleUrls: ['../../../assets/sass/modules/guest/main-guest.component.scss']
})
export class MainGuestComponent {
  public register: boolean = false;

  showLoginForm(): void {
    this.register = false;
  }

  showRegisterForm(): void {
    this.register = true;
  }
}
