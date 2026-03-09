import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
}
