import { PreorderComponent } from './components/preorder/preorder.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: '', component: AboutComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
