import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RoomComponent } from './pages/room/room.component';


const routes: Routes = [
  {path: 'inicio', component:HomeComponent },
  {path: 'nosotros', component:AboutComponent},
  {path: 'contactenos', component: ContactComponent},
  {path: 'habitaciones', component: RoomComponent}
  // {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
