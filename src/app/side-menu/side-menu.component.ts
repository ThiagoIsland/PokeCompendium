import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, RouterOutlet, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'], 
})
export class SideMenuComponent {}