import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../service/auth/auth-service';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [MatSidenavModule, MatListModule, RouterLink, RouterOutlet, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private authService: AuthService){}
  @ViewChild('drawer')
  drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle()
  }

  logout() {
    this.authService.logout()
  }
}
