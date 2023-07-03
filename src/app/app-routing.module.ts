import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuestComponent } from './modules/guest/main-guest.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './modules/services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'guest', component: MainGuestComponent },
  { path: '', component: MainGuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
