import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { LoginFormComponent } from './main-page/login-form/login-form.component';
import { RegisterFormComponent } from './main-page/register-form/register-form.component';
import { ContentLayoutComponent } from './content-page/content-layout/content-layout.component';
import { NavbarComponent } from './content-page/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ContentLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
