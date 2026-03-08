import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isScrolled = false;
    isMobileMenuOpen = false;
    isAppModalOpen = false;
    isDemoModalOpen = false;
    isPricingPage = false;

    constructor(
        private router: Router,
        private modalService: ModalService
    ) {
        this.modalService.appModal$.subscribe(open => this.isAppModalOpen = open);
        this.modalService.demoModal$.subscribe(open => this.isDemoModalOpen = open);

        // Track route changes
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.isPricingPage = this.router.url.includes('/pricing');
            this.onScroll();
        });
    }

    ngOnInit() {
        this.isPricingPage = this.router.url.includes('/pricing');
        this.onScroll();
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => this.onScroll(), true);
        }
    }

    onScroll() {
        if (typeof window !== 'undefined') {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            this.isScrolled = scrollTop > 50;
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }

    openAppModal() {
        this.closeMobileMenu();
        this.modalService.openAppModal();
    }

    closeAppModal() {
        this.modalService.closeAppModal();
    }

    openDemoModal() {
        this.closeMobileMenu();
        this.modalService.openDemoModal();
    }

    closeDemoModal() {
        this.modalService.closeDemoModal();
    }

    navigateToSection(sectionId: string) {
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
