import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf and *ngFor
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Removed unused PrimeNG modules
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader implements OnInit {
  items: MenuItem[] = [];
  mobileMenuOpen = false;
  isMobile = false;

  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.closeMobileMenu();
      queueMicrotask(() => this.snapToActive());
    });
  }
  ngOnInit() {
    this.buildMenu();
    this.checkScreen(); // Initialize screen size check
  }

  buildMenu() {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'About', routerLink: '/about' },
      { label: 'Academics', routerLink: '/academics' },
      // { label: 'Facilities', routerLink: '/facilities' },
      { label: 'Gallery', routerLink: '/gallery' },
      { label: 'Contact', routerLink: '/contact' },
    ];
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  private checkScreen() {
    this.isMobile = window.innerWidth <= 900;
    if (!this.isMobile) {
      this.mobileMenuOpen = false;
    }
  }

  indicatorStyle: { [k: string]: string } = {
    transform: 'translateX(0px)',
    width: '84px',
  };

  ngAfterViewInit() {
    // set initial position to the active route link
    queueMicrotask(() => this.snapToActive());
  }

  setIndicatorFromEl(ev: Event) {
    const target = ev.currentTarget as HTMLElement;
    if (!target) return;

    const track = target.parentElement as HTMLElement; // .menuTrack
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const itemRect = target.getBoundingClientRect();

    const x = itemRect.left - trackRect.left;
    const w = itemRect.width;

    this.indicatorStyle = {
      transform: `translateX(${x}px)`,
      width: `${w}px`,
    };
  }

  private snapToActive() {
    const track = document.querySelector('.menuTrack') as HTMLElement | null;
    if (!track) return;

    const active = track.querySelector('.menuLink.active') as HTMLElement | null;
    if (!active) {
      // fallback to first item
      const first = track.querySelector('.menuLink') as HTMLElement | null;
      if (first) this.setIndicatorFromEl({ currentTarget: first } as any);
      return;
    }

    this.setIndicatorFromEl({ currentTarget: active } as any);
  }
}
