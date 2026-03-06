import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
    selector: 'app-integrations-page',
    standalone: true,
    imports: [CommonModule, IntegrationsComponent, CtaComponent],
    template: `
    <div class="page-header">
      <h1>Integrations</h1>
    </div>
    <app-integrations></app-integrations>
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
export class IntegrationsPageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
