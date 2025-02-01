import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Game {
  name: string;
  region: string;
  generation: string;
  mapImage: string;
}

@Component({
  selector: 'app-gameregion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameregion.component.html',
  styleUrls: ['./gameregion.component.css']
})
export class GameregionComponent implements OnInit {
  games: Game[] = [];
  selectedGame: Game | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames() {
    const apiUrl = 'https://pokeapi.co/api/v2/version-group/';

    this.http.get<any>(apiUrl).subscribe(data => {
      const gameRequests = data.results.map((game: any) => 
        this.http.get<any>(game.url)
      );

      Promise.all(gameRequests).then(gameDetails => {
        this.games = gameDetails.map((gameDetail: any) => ({
          name: gameDetail.name.replace('-', ' ').toUpperCase(),
          region: gameDetail.regions?.[0]?.name || "Unknown",
          generation: gameDetail.generation?.name || "Unknown",
          mapImage: this.getRegionMap(gameDetail.regions?.[0]?.name)
        }));
      });
    });
  }

  getRegionMap(region: string | undefined): string {
    const maps: { [key: string]: string } = {
      'kanto': 'assets/maps/kanto.png',
      'johto': 'assets/maps/johto.png',
      'hoenn': 'assets/maps/hoenn.png',
      'sinnoh': 'assets/maps/sinnoh.png',
      'unova': 'assets/maps/unova.png',
      'kalos': 'assets/maps/kalos.png',
      'alola': 'assets/maps/alola.png',
      'galar': 'assets/maps/galar.png',
      'paldea': 'assets/maps/paldea.png'
    };
    return maps[region || ''] || 'assets/maps/default.png';
  }

  selectGame(game: Game) {
    this.selectedGame = game;
  }
}