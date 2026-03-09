import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class ScrollToTopComponent implements OnInit {
  isVisible = false;
  private readonly scrollThreshold = 240;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const winScroll = window.pageYOffset || window.scrollY || 0;
      const docScroll = document.documentElement ? document.documentElement.scrollTop : 0;
      const bodyScroll = document.body ? document.body.scrollTop : 0;
      const scrollElem = document.scrollingElement ? document.scrollingElement.scrollTop : 0;

      const scrollPosition = Math.max(winScroll, docScroll, bodyScroll, scrollElem);
      this.isVisible = scrollPosition > this.scrollThreshold;
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
}
