import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from '../../components/clients/clients.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
    selector: 'app-clients-page',
    standalone: true,
    imports: [CommonModule, ClientsComponent, CtaComponent],
    template: `
    <div class="page-header">
      <h1>Our Clients</h1>
    </div>
    <app-clients></app-clients>
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
export class ClientsPageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
