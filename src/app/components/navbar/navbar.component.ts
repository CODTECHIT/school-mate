import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  isAppModalOpen = false;
  isDemoModalOpen = false;
  isPricingPage = false;
  private readonly subscriptions = new Subscription();
  private readonly nativeScrollListener = () => this.onScroll();

  constructor(
    private router: Router,
    private modalService: ModalService,
  ) {
    this.subscriptions.add(
      this.modalService.appModal$.subscribe((open) => {
        this.isAppModalOpen = open;
      }),
    );
    this.subscriptions.add(
      this.modalService.demoModal$.subscribe((open) => {
        this.isDemoModalOpen = open;
      }),
    );

    // Track route changes.
    this.subscriptions.add(
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        this.isPricingPage = this.router.url.includes('/pricing');
        this.onScroll();
      }),
    );
  }

  ngOnInit(): void {
    this.isPricingPage = this.router.url.includes('/pricing');
    this.onScroll();

    // Extra listeners to cover cases where scrolling happens on container elements.
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.nativeScrollListener, {
        passive: true,
        capture: true,
      });
      document.addEventListener('scroll', this.nativeScrollListener, {
        passive: true,
        capture: true,
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();

    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.nativeScrollListener, true);
      document.removeEventListener('scroll', this.nativeScrollListener, true);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window !== 'undefined') {
      const mainContent = document.querySelector('main.main-content') as HTMLElement | null;

      const scrollTop = Math.max(
        window.pageYOffset || 0,
        document.documentElement?.scrollTop || 0,
        document.body?.scrollTop || 0,
        document.scrollingElement?.scrollTop || 0,
        mainContent?.scrollTop || 0,
      );

      const nextIsScrolled = scrollTop > 0;
      if (this.isScrolled !== nextIsScrolled) {
        this.isScrolled = nextIsScrolled;
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  openAppModal(): void {
    this.closeMobileMenu();
    this.modalService.openAppModal();
  }

  closeAppModal(): void {
    this.modalService.closeAppModal();
  }

  openDemoModal(): void {
    this.closeMobileMenu();
    this.modalService.openDemoModal();
  }

  closeDemoModal(): void {
    this.modalService.closeDemoModal();
  }

  navigateToSection(sectionId: string): void {
    this.closeMobileMenu();
    if (this.router.url === '/' || this.router.url === '/home') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/home'], { fragment: sectionId }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    }
  }
}
