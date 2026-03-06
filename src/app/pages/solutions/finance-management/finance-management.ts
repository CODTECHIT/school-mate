import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../../components/cta/cta.component';

@Component({
  selector: 'app-finance-management',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Finance Management</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Complete <span class="highlight">Financial Visibility</span></h2>
            <p>Take full control of your institution's finances with our comprehensive accounting and reporting tools. Monitor every rupee with precision.</p>
            <ul class="feature-list">
              <li><span class="material-icon">check_circle</span> Income & Expenditure Tracking</li>
              <li><span class="material-icon">check_circle</span> Automated Ledger & Journal Entries</li>
              <li><span class="material-icon">check_circle</span> Comprehensive Financial Reporting</li>
              <li><span class="material-icon">check_circle</span> Budgeting & Forecasting Tools</li>
              <li><span class="material-icon">check_circle</span> Payroll & Tax Management Compliance</li>
            </ul>
          </div>
          <div class="image-content">
            <div class="placeholder-img">
              <span class="material-icon">account_balance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-cta></app-cta>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #2856A3, #5B2D8E);
      padding: 120px 24px 60px;
      text-align: center;
      color: white;
    }
    .page-header h1 { font-size: 3rem; font-weight: 800; margin: 0; }
    .page-content { padding: 80px 24px; }
    .container { max-width: 1200px; margin: 0 auto; }
    .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .highlight { color: #2856A3; }
    h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 24px; color: #1a1b1f; }
    p { font-size: 1.1rem; color: #666; line-height: 1.8; margin-bottom: 30px; }
    .feature-list { list-style: none; padding: 0; }
    .feature-list li { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; font-weight: 500; color: #333; }
    .feature-list .material-icon { color: #2856A3; }
    .placeholder-img { background: #f8f9fa; height: 400px; border-radius: 20px; display: flex; align-items: center; justify-content: center; border: 2px dashed #eee; }
    .placeholder-img .material-icon { font-size: 100px; color: #ddd; }
    @media (max-width: 768px) {
      .content-grid { grid-template-columns: 1fr; gap: 40px; }
      .page-header h1 { font-size: 2.2rem; }
      h2 { font-size: 1.8rem; }
    }
  `]
})
export class FinanceManagement implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
}
