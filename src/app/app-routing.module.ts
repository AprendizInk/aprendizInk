import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { ContentLayoutComponent } from './content-page/content-layout/content-layout.component';
import { AuthGuard } from './routing/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: ContentLayoutComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
