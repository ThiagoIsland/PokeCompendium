import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { PokesearchComponent } from './page/pokesearch/pokesearch.component';
import { ItemfinderComponent } from './page/itemfinder/itemfinder.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },         
  { path: 'home', component: HomeComponent },      
  { path: 'about', component: AboutComponent },     
  { path: 'pokesearch', component: PokesearchComponent }, 
  { path: 'itemfinder', component: ItemfinderComponent }  
];
