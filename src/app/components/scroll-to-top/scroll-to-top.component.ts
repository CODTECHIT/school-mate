import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-scroll-to-top',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './scroll-to-top.component.html',
    styleUrl: './scroll-to-top.component.css',
})
export class ScrollToTopComponent {
    isVisible = false;
    private readonly SCROLL_THRESHOLD = 300;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (isPlatformBrowser(this.platformId)) {
            const scrollPosition =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop || 0;

            this.isVisible = scrollPosition > this.SCROLL_THRESHOLD;
        }
    }

    scrollToTop() {
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
