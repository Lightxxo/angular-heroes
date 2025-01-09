import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
//import { HomeComponent } from './home/home.component'; // Replace with your actual component

export const routes: Routes = [
  //{ path: '', component: HomeComponent },  // Define routes
  // Add other routes as needed
  { path: 'heroes', component: HeroesComponent }
];
