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

    <!-- Floating Quick Contact Buttons -->
    <div class="floating-quick-actions">
      <a
        href="https://wa.me/918074041675?text=Hello%20I%20am%20interested%20in%20schoolmate%20software%20please%20share%20more%20details"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-btn whatsapp"
        title="Chat on WhatsApp"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
      <a
        href="features_presentation.pdf"
        download="schoolmate-brochure.pdf"
        class="floating-btn brochure"
        title="Download Brochure"
      >
        <i class="fas fa-file-pdf"></i>
      </a>
      <a href="tel:+918074041675" class="floating-btn call" title="Call Us">
        <i class="fas fa-phone"></i>
      </a>
    </div>

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
        // Force top scroll on every route change (important for footer link navigation).
        window.scrollTo({ top: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

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
      // Cards
      '.feature-card',
      '.integration-card',
      '.showcase-card',
      '.role-card',
      '.logo-item',
      '.testimonial-card',
      '.stat-card',
      '.contact-info-card',
      '.contact-form-card',
      '.preview-card',
      '.solution-card',
      // Section elements
      '.section-header',
      '.section-title',
      '.section-subtitle',
      '.about-image',
      '.about-content',
      '.feature-list',
      '.client-logo',
      // CTA elements
      '.cta-content',
      '.cta-button',
      // Stats
      '.stats-grid',
      // Footer columns
      '.footer-column',
      '.footer-links',
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
