import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { PokesearchComponent } from './page/pokesearch/pokesearch.component';
import { ItemfinderComponent } from './page/itemfinder/itemfinder.component';
import { PokedexComponent } from './page/pokedex/pokedex.component';
import { TeammakerComponent } from './page/teammaker/teammaker.component';
import { GamesComponent } from './page/games/games.component';
import { RegionsComponent } from './page/regions/regions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },         
    { path: 'home', component: HomeComponent },      
    { path: 'about', component: AboutComponent },     
    { path: 'pokesearch', component: PokesearchComponent }, 
    { path: 'itemfinder', component: ItemfinderComponent },
    { path: 'pokedex', component: PokedexComponent },
    { path: 'teammaker', component: TeammakerComponent },
    { path: 'games', component: GamesComponent },
    { path: 'regions', component: RegionsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];