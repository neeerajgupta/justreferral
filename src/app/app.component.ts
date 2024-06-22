import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { FevIconService } from './services/fev-icon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Just_Referral';
  private isBrowser: boolean;

  items: MenuItem[] | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private faviconService: FevIconService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-star',
        route: '/about'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        route: '/tour',
        items: [
          {
            label: 'Smart',
            icon: 'pi pi-bolt'
          },
          {
            label: 'FDS',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Skills',
        icon: 'pi pi-spin pi-cog',
        route: '/skills'
      },
      {
        label: 'Experience',
        icon: 'pi pi-user-edit',
        route: '/Experience'
      },
      {
        label: 'Contact',
        icon: 'pi pi-phone',
        route: '/Contact'
      },
    ]
    if (this.isBrowser) {
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Section ${sectionId} not found`);
    }
  }
  handleVisibilityChange(): void {
    if (document.visibilityState === 'visible') {
      document.title = 'Welcome to Neeraj Gupta Website';
      this.faviconService.setFavicon('assets/favicon.png');
    } else {
      document.title = 'Come Back To Our Website';
      this.faviconService.setFavicon('assets/favhand.png');
    }
  }
  
}
