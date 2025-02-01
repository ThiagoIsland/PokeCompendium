import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-itemfinder',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './itemfinder.component.html',
  styleUrls: ['./itemfinder.component.css']
})
export class ItemfinderComponent {
  itemData: any = null;
  apiUrl = 'https://pokeapi.co/api/v2/item/';

  constructor(private http: HttpClient) {}

  searchItem(itemName: string) {
    if (!itemName) return;
    
    this.http.get(`${this.apiUrl}${itemName.toLowerCase()}`).subscribe(
      (data) => {
        this.itemData = data;
      },
      (error) => {
        this.itemData = null; 
      }
    );
  }
}