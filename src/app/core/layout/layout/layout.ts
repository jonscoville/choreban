import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import  { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Sidenav } from "../sidenav/sidenav";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, MatButtonModule, MatIcon, MatToolbar, Sidenav, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Layout {

  readonly collapsed = signal(false);
  readonly isHandset = signal(false);
  
  constructor() {
    effect(() => {
      console.log('Layout collapsed state:', this.collapsed());
    });
  }

  toggleSideNav() {
    this.collapsed.set(!this.collapsed());
    console.log('Toggled sidenav, new state:', this.collapsed());
  }

}
