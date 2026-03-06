import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from '../../components/features/features.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
    selector: 'app-features-page',
    standalone: true,
    imports: [CommonModule, FeaturesComponent, CtaComponent],
    template: `
    <div class="page-header">
      <h1>Our Features</h1>
    </div>
    <app-features></app-features>
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
export class FeaturesPageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
