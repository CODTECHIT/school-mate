import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Reports</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <h2>Data-Driven <span class="highlight">School Insights</span></h2>
        <p>
          The Reports module gives administrators real-time, filterable, and exportable insights
          across academics, attendance, fees, transport, staff, admissions, and operations.
        </p>
        <ul class="feature-list">
          <li>
            <span class="material-icon">check_circle</span> Academic and attendance trend reports
          </li>
          <li>
            <span class="material-icon">check_circle</span> Fee collections, dues, and defaulter
            tracking
          </li>
          <li>
            <span class="material-icon">check_circle</span> Staff attendance and payroll summaries
          </li>
          <li><span class="material-icon">check_circle</span> Lead and admission analytics</li>
          <li>
            <span class="material-icon">check_circle</span> PDF and Excel export with advanced
            filters
          </li>
        </ul>
      </div>
    </div>
    <app-cta></app-cta>
  `,
  styles: [
    `
      .page-header {
        background: linear-gradient(135deg, #2856a3, #5b2d8e);
        padding: 120px 24px 60px;
        text-align: center;
        color: white;
      }
      .page-header h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0;
      }
      .page-content {
        padding: 80px 24px;
        text-align: center;
      }
      .container {
        max-width: 900px;
        margin: 0 auto;
      }
      .highlight {
        color: #2856a3;
      }
      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 24px;
        color: #1a1b1f;
      }
      p {
        font-size: 1.1rem;
        color: #666;
        line-height: 1.8;
        margin-bottom: 20px;
      }
      .feature-list {
        list-style: none;
        padding: 0;
        margin-top: 24px;
        text-align: left;
      }
      .feature-list li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 12px;
        color: #2f3541;
        font-weight: 500;
      }
      .feature-list .material-icon {
        color: #2856a3;
      }
    `,
  ],
})
export class Reports implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
