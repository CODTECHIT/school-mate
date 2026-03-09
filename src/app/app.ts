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
    <div class="app-wrapper">
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

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <app-scroll-to-top></app-scroll-to-top>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .app-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
      }
      .main-content {
        flex: 1 0 auto; /* This forces the footer to the bottom even if content is empty */
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      app-footer {
        flex-shrink: 0;
      }
    `,
  ],
})
export class App {
  private observer: IntersectionObserver | null = null;
  private routeSubscription: Subscription | null = null;
  private isFirstNavigationEvent = true;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.createObserver();
    this.initScrollAnimations();

    this.routeSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Skip the initial router event on app bootstrap to avoid refresh scroll jump.
        if (this.isFirstNavigationEvent) {
          this.isFirstNavigationEvent = false;
          setTimeout(() => this.initScrollAnimations(), 60);
          return;
        }

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

    const contentSelector = [
      '.section-header',
      '.about-content',
      '.solution-content',
      '.cta-content',
      '.card-content',
      '.features-cta',
      '.stats-container',
      '.footer-col',
      '.contact-info-card',
      '.contact-form-card',
    ].join(', ');

    const mediaSelector = [
      '.about-visual',
      '.about-image-wrapper',
      '.solution-visual',
      '.cta-visual',
      '.showcase-card',
      '.image-wrap',
      '.logo-carousel',
      '.integrations-visual',
      '.testimonial-card',
    ].join(', ');

    const cardSelector = [
      '.feature-card',
      '.integration-card',
      '.role-card',
      '.logo-item',
      '.stat-card',
      '.preview-card',
      '.solution-card',
      '.about-float-card',
      '.floating-card',
    ].join(', ');

    this.registerDirectionalSet(contentSelector, 'scroll-animate-left');
    this.registerDirectionalSet(mediaSelector, 'scroll-animate-right');
    this.registerAlternatingStagger(cardSelector);
  }

  private registerDirectionalSet(selector: string, animationClass: string): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((element, index) => {
      if (this.hasScrollAnimation(element)) {
        return;
      }

      element.classList.add(animationClass, `scroll-delay-${(index % 5) + 1}`);
      this.observer?.observe(element);
    });
  }

  private registerAlternatingStagger(selector: string): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((element, index) => {
      if (this.hasScrollAnimation(element)) {
        return;
      }

      const directionalClass = index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right';
      element.classList.add(directionalClass, `scroll-delay-${(index % 5) + 1}`);
      this.observer?.observe(element);
    });
  }

  private hasScrollAnimation(element: HTMLElement): boolean {
    return (
      element.classList.contains('scroll-animate') ||
      element.classList.contains('scroll-animate-left') ||
      element.classList.contains('scroll-animate-right') ||
      element.classList.contains('scroll-animate-up') ||
      element.classList.contains('scroll-animate-down') ||
      element.classList.contains('scroll-animate-scale')
    );
  }
}
