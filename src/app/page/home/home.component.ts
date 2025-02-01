import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
