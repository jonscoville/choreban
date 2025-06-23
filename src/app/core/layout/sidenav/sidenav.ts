import { Component, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from './nav-links';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatButtonModule,
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
  private readonly authService = inject(Auth);

  readonly user = toSignal(this.authService.getUserInfo());

  protected readonly isHandset = signal(false);
  protected readonly navLinks = NAV_LINKS;
}
