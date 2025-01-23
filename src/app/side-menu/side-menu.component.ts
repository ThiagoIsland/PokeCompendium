import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'], 
})
export class SideMenuComponent {}