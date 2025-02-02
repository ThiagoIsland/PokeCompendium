import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { regionsList } from '../../data/regions-data';

@Component({
  selector: 'app-regions',
  imports: [CommonModule],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.css'
})
export class RegionsComponent {
  regions = regionsList;
}
