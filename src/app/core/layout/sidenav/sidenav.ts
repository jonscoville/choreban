import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from './nav-links';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatNavList,
    MatIcon, 
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  host: {
    class: 'h-full',
  }
})
export class Sidenav {
  readonly collapsed = input.required<boolean>();

  protected readonly isHandset = signal(false);
  protected readonly navLinks = NAV_LINKS;
}
