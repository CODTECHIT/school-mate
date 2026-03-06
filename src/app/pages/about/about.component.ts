import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [CommonModule, AboutComponent, StatsComponent, CtaComponent],
    template: `
    <div class="page-header">
      <h1>About Us</h1>
    </div>
    <app-about></app-about>
    <app-stats></app-stats>
    <app-cta></app-cta>
  `,
    styles: [`
    .page-header {
      background: linear-gradient(135deg, #2856A3, #5B2D8E);
      padding: 120px 24px 60px;
      text-align: center;
      color: white;
    }
    .page-header h1 { font-size: 3rem; font-weight: 800; }
  `]
})
export class AboutPageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
