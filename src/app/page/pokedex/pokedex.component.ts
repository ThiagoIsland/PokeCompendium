import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Pokemon {
  name: string;
  sprite: string;
}

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];
  selectedRegion = 'Kanto';
  pokemonList: Pokemon[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPokemonByRegion(this.selectedRegion);
  }

  fetchPokemonByRegion(region: string) {
    this.selectedRegion = region;

    const regionUrls: any = {
      'Kanto': 'https://pokeapi.co/api/v2/pokedex/2/',
      'Johto': 'https://pokeapi.co/api/v2/pokedex/3/',
      'Hoenn': 'https://pokeapi.co/api/v2/pokedex/4/',
      'Sinnoh': 'https://pokeapi.co/api/v2/pokedex/5/',
      'Unova': 'https://pokeapi.co/api/v2/pokedex/8/',
      'Kalos': 'https://pokeapi.co/api/v2/pokedex/12/',
      'Alola': 'https://pokeapi.co/api/v2/pokedex/16/',
      'Galar': 'https://pokeapi.co/api/v2/pokedex/27/',
      'Paldea': 'https://pokeapi.co/api/v2/pokedex/31/'
    };

    const url = regionUrls[region];

    this.http.get<any>(url).subscribe(data => {
      this.pokemonList = [];
      
      data.pokemon_entries.forEach((entry: any) => {
        this.http.get<any>(entry.pokemon_species.url).subscribe(pokemonData => {
          const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;
          
          this.pokemonList.push({
            name: entry.pokemon_species.name,
            sprite: spriteUrl
          });

        });
      });
    });
  }
}