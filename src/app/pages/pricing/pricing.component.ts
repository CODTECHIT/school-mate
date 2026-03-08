import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

interface Plan {
  name: 'Silver' | 'Gold' | 'Premium';
  subtitle: string;
  audience: string;
  modules: string[];
  accentClass: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <section class="page-header">
      <div class="container">
        <p class="eyebrow">Pricing Plans</p>
        <h1>Choose The Right Schoolmate Plan</h1>
        <p class="subtext">
          Built from your current project modules. Silver covers essentials, Gold adds operational
          depth, and Premium unlocks advanced automation and analytics.
        </p>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container plans-grid">
        <article class="plan-card" *ngFor="let plan of plans" [ngClass]="plan.accentClass">
          <header class="plan-head">
            <h2>{{ plan.name }}</h2>
            <p>{{ plan.subtitle }}</p>
          </header>
          <p class="plan-audience">Best For: {{ plan.audience }}</p>

          <ul class="module-list">
            <li *ngFor="let module of plan.modules">
              <span class="material-icon">check_circle</span>
              <span>{{ module }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="notes-section">
      <div class="container notes-card">
        <h3>Plan Logic Used For This Page</h3>
        <p>
          Modules are mapped by complexity from your existing feature set: core school operations in
          Silver, financial and transport expansion in Gold, and enterprise workflows in Premium.
        </p>
      </div>
    </section>

    <app-cta></app-cta>
  `,
  styles: [
    `
      .page-header {
        background: linear-gradient(135deg, #1d4f9c, #0f2b59);
        color: #fff;
        text-align: center;
        padding: 120px 24px 68px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .eyebrow {
        margin: 0 0 10px;
        font-size: 0.86rem;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        color: #f5b731;
      }

      .page-header h1 {
        margin: 0;
        font-size: clamp(2rem, 5vw, 3.2rem);
        font-weight: 800;
      }

      .subtext {
        margin: 18px auto 0;
        max-width: 840px;
        font-size: 1.02rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.92);
      }

      .pricing-section {
        padding: 0px 24px 30px;
        background: #f6f9ff;
      }

      .plans-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
      }

      .plan-card {
        border-radius: 20px;
        background: #fff;
        border: 1px solid #e5ebf6;
        box-shadow: 0 10px 24px rgba(10, 30, 64, 0.06);
        overflow: hidden;
      }

      .plan-head {
        padding: 22px 22px 16px;
        border-bottom: 1px solid #eef2fa;
      }

      .plan-head h2 {
        margin: 0;
        font-size: 1.6rem;
      }

      .plan-head p {
        margin: 8px 0 0;
        color: #49566c;
        font-size: 0.95rem;
      }

      .plan-audience {
        margin: 14px 22px 8px;
        font-size: 0.9rem;
        color: #334155;
        font-weight: 600;
      }

      .module-list {
        list-style: none;
        margin: 0;
        padding: 8px 22px 22px;
        display: grid;
        gap: 11px;
      }

      .module-list li {
        display: flex;
        align-items: start;
        gap: 9px;
        color: #1f2937;
        line-height: 1.45;
      }

      .module-list .material-icon {
        font-size: 19px;
        margin-top: 2px;
        color: #16a34a;
      }

      .silver .plan-head {
        background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
      }

      .gold {
        border-color: #f8d58a;
        box-shadow: 0 14px 28px rgba(245, 183, 49, 0.18);
      }

      .gold .plan-head {
        background: linear-gradient(135deg, #fff4cc, #f7dd8f);
      }

      .premium .plan-head {
        background: linear-gradient(135deg, #dbeafe, #bfdbfe);
      }

      .notes-section {
        background: #f6f9ff;
        padding: 0 24px 60px;
      }

      .notes-card {
        background: #fff;
        border: 1px solid #e6edf7;
        border-radius: 16px;
        padding: 20px;
      }

      .notes-card h3 {
        margin: 0 0 10px;
        font-size: 1.2rem;
        color: #13294d;
      }

      .notes-card p {
        margin: 0;
        color: #425068;
        line-height: 1.7;
      }

      @media (max-width: 1024px) {
        .plans-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 700px) {
        .plans-grid {
          grid-template-columns: 1fr;
        }

        .page-header {
          padding: 104px 18px 56px;
        }

        .pricing-section {
          padding: 0px 16px 24px;
        }

        .notes-section {
          padding: 0 16px 44px;
        }
      }
    `,
  ],
})
export class PricingPageComponent implements OnInit {
  plans: Plan[] = [
    {
      name: 'Silver',
      subtitle: 'Essential digital operations',
      audience: 'Schools starting digital transformation',
      accentClass: 'silver',
      modules: [
        'Student Information System',
        'Teacher & Employee Management',
        'Student Attendance System',
        'Homework & Classwork Updates',
        'Timetable Management',
        'Push Notifications + SMS Alerts',
        'Parent Mobile App',
        'Teacher Mobile App',
      ],
    },
    {
      name: 'Gold',
      subtitle: 'Advanced daily administration',
      audience: 'Growing schools with multi-department workflows',
      accentClass: 'gold',
      modules: [
        'All Silver modules',
        'Accounts & Fee Management',
        'Examination Management',
        'Online Marksheet Generator',
        'Transport Management',
        'GPS Bus Tracking',
        'Certificate Generator',
        'Reports & Analytics',
        'Online Admission System',
      ],
    },
    {
      name: 'Premium',
      subtitle: 'Enterprise automation and control',
      audience: 'Large institutions and multi-branch groups',
      accentClass: 'premium',
      modules: [
        'All Gold modules',
        'Biometric Attendance Integration',
        'Payment Gateway Integration',
        'Automatic Cloud Backup',
        'Security & Permissions (advanced roles)',
        'Online Examination',
        'Inventory & Asset Tracking',
        'Hostel Management',
        'Bulk Data Import + Bulk Printing',
      ],
    },
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
