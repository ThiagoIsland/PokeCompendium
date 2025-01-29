import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokesearch',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})
export class PokesearchComponent {
  pokemonData: any = null;
  pokemonAbilities: string = '';
  pokemonTypes: string = '';
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  searchPokemon(pokemonName: string) {
    if (!pokemonName.trim()) return; // Evita buscas vazias

    this.http.get(`${this.apiUrl}${pokemonName.toLowerCase()}`).subscribe(
      (data: any) => {
        this.pokemonData = data;

        // Processa habilidades e tipos
        this.pokemonAbilities = data.abilities
          .map((a: any) => a.ability.name)
          .join(', ');

        this.pokemonTypes = data.types
          .map((t: any) => t.type.name)
          .join(', ');
      },
      (error) => {
        this.pokemonData = null; // Caso não encontre o Pokémon
        this.pokemonAbilities = '';
        this.pokemonTypes = '';
      }
    );
  }
}