import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ScrollToTopComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-scroll-to-top></app-scroll-to-top>
    <app-footer></app-footer>
  `,
})
export class App {
  private observer: IntersectionObserver | null = null;
  private routeSubscription: Subscription | null = null;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.createObserver();
    this.initScrollAnimations();

    this.routeSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.initScrollAnimations(), 60);
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.routeSubscription?.unsubscribe();
  }

  private createObserver(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('in-view');
          this.observer?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    );
  }

  private initScrollAnimations(): void {
    if (!this.observer) {
      return;
    }

    const selector = [
      '.feature-card',
      '.integration-card',
      '.showcase-card',
      '.role-card',
      '.logo-item',
      '.testimonial-card',
      '.stat-card',
      '.contact-info-card',
      '.contact-form-card',
    ].join(', ');

    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((element) => {
      if (element.classList.contains('scroll-animate')) {
        return;
      }

      element.classList.add('scroll-animate');
      this.observer?.observe(element);
    });
  }
}
