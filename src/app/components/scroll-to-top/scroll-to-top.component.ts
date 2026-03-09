import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopComponent implements OnInit {
  isVisible = false;
  private readonly scrollThreshold = 120;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibilityFromPosition();
    }
  }

  @HostListener('window:scroll')
  @HostListener('document:scroll')
  @HostListener('window:touchmove')
  @HostListener('window:wheel')
  onViewportScroll(): void {
    this.updateVisibilityFromPosition();
  }

  private updateVisibilityFromPosition(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const currentScrollTop = this.getScrollPosition();
    const shouldShow = currentScrollTop > this.scrollThreshold;

    if (shouldShow !== this.isVisible) {
      this.isVisible = shouldShow;
      this.cdr.markForCheck();
    }
  }

  private getScrollPosition(): number {
    const winScroll = window.pageYOffset || window.scrollY || 0;
    const docScroll = document.documentElement ? document.documentElement.scrollTop : 0;
    const bodyScroll = document.body ? document.body.scrollTop : 0;
    const scrollElem = document.scrollingElement ? document.scrollingElement.scrollTop : 0;

    return Math.max(winScroll, docScroll, bodyScroll, scrollElem);
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
}
