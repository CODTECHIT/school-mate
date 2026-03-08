import { Component, HostListener, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-scroll-to-top',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './scroll-to-top.component.html',
    styleUrl: './scroll-to-top.component.css',
})
export class ScrollToTopComponent implements OnInit {
    isVisible = false;
    private readonly SCROLL_THRESHOLD = 50; // Temporarily very low to ensure it shows up

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private cdr: ChangeDetectorRef
    ) { }

    @HostListener('window:scroll', [])
    @HostListener('document:scroll', [])
    onWindowScroll() {
        this.checkScroll();
    }

    private checkScroll() {
        if (isPlatformBrowser(this.platformId)) {
            const winScroll = window.pageYOffset || window.scrollY || 0;
            const docScroll = document.documentElement ? document.documentElement.scrollTop : 0;
            const bodyScroll = document.body ? document.body.scrollTop : 0;
            const scrollElem = document.scrollingElement ? document.scrollingElement.scrollTop : 0;

            const scrollPosition = Math.max(winScroll, docScroll, bodyScroll, scrollElem);

            const newVisibility = scrollPosition > this.SCROLL_THRESHOLD;
            if (this.isVisible !== newVisibility) {
                this.isVisible = newVisibility;
                this.cdr.detectChanges();
            }
        }
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.checkScroll();
            // Listen on window, document, and body to be absolutely sure
            window.addEventListener('scroll', () => this.checkScroll(), true);
            document.addEventListener('scroll', () => this.checkScroll(), true);
            if (document.body) {
                document.body.addEventListener('scroll', () => this.checkScroll(), true);
            }
        }
    }

    scrollToTop(): void {
        if (isPlatformBrowser(this.platformId)) {
            // Scroll everything to be sure
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.scrollTo({ top: 0, behavior: 'smooth' });

            // Fallback for older browsers or specific CSS layouts
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }
}
