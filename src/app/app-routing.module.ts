import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuestComponent } from './modules/guest/main-guest.component';

const routes: Routes = [
  { path: 'guest', component: MainGuestComponent },
  { path: '', component: MainGuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
