import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGuestComponent } from '../guest/main-guest.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainGuestComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GuestModule { }
