import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  scrollToTop() {
    // Small delay to ensure navigation completes first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 150);
  }

  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 150);
    });
  }
}
