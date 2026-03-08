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
      <div class="header-shape shape-left"></div>
      <div class="header-shape shape-right"></div>
      <div class="container hero-inner">
        <p class="eyebrow">Schoolmate Pricing</p>
        <h1>Premium Plans For Every Stage Of Your School Growth</h1>
        <p class="subtext">
          Start with the essentials, scale into automation, and unlock enterprise-grade control.
          Each plan is mapped from modules already available in your platform.
        </p>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container plans-grid">
        <article class="plan-card" *ngFor="let plan of plans" [ngClass]="plan.accentClass">
          <p class="plan-tag" *ngIf="plan.name === 'Gold'">Most Popular</p>
          <header class="plan-head">
            <h2>{{ plan.name }}</h2>
            <p>{{ plan.subtitle }}</p>
          </header>

          <p class="plan-audience">Best For: {{ plan.audience }}</p>

          <ul class="module-list">
            <li *ngFor="let module of plan.modules">
              <span class="material-icon">task_alt</span>
              <span>{{ module }}</span>
            </li>
          </ul>

          <a routerLink="/contact" class="plan-cta">Book A Demo</a>
        </article>
      </div>
    </section>

    <section class="notes-section">
      <div class="container notes-card">
        <h3>How Plans Are Structured</h3>
        <p>
          Silver includes core operations, Gold adds deeper administration and tracking, and Premium
          focuses on automation, security, and enterprise workflows for larger institutions.
        </p>
      </div>
    </section>

    <app-cta></app-cta>
  `,
  styles: [
    `
      .page-header {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 10% 15%, #3e6ab5 0%, transparent 32%),
          radial-gradient(circle at 85% 10%, #214885 0%, transparent 30%),
          linear-gradient(135deg, #0f2a57, #173c74 55%, #102f60);
        color: #fff;
        text-align: center;
        padding: 128px 24px 94px;
      }

      .header-shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(2px);
        pointer-events: none;
      }

      .shape-left {
        width: 280px;
        height: 280px;
        background: rgba(250, 204, 21, 0.14);
        left: -70px;
        top: 36px;
      }

      .shape-right {
        width: 340px;
        height: 340px;
        background: rgba(147, 197, 253, 0.12);
        right: -100px;
        top: -70px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .hero-inner {
        position: relative;
        z-index: 1;
      }

      .eyebrow {
        margin: 0 0 14px;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: #facc15;
      }

      .page-header h1 {
        margin: 0;
        font-size: clamp(2rem, 4.8vw, 3.45rem);
        font-weight: 800;
        letter-spacing: -0.8px;
      }

      .subtext {
        margin: 20px auto 0;
        max-width: 900px;
        font-size: 1.05rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.92);
      }

      .pricing-section {
        padding: 0 24px 38px;
        background: linear-gradient(180deg, #eef4ff 0, #f7f9fd 190px, #f7f9fd 100%);
      }

      .plans-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
        margin-top: -62px;
      }

      .plan-card {
        position: relative;
        border-radius: 24px;
        background: #ffffff;
        border: 1px solid #dae5f6;
        box-shadow: 0 18px 42px rgba(17, 37, 74, 0.1);
        overflow: hidden;
        padding-bottom: 18px;
        transition:
          transform 0.25s ease,
          box-shadow 0.25s ease;
      }

      .plan-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 24px 48px rgba(17, 37, 74, 0.14);
      }

      .plan-tag {
        position: absolute;
        top: 16px;
        right: 16px;
        margin: 0;
        padding: 6px 12px;
        border-radius: 999px;
        background: linear-gradient(135deg, #f59e0b, #f97316);
        color: #fff;
        font-size: 0.74rem;
        font-weight: 800;
        letter-spacing: 0.3px;
      }

      .plan-head {
        padding: 28px 22px 16px;
        border-bottom: 1px solid #eef2fa;
      }

      .plan-head h2 {
        margin: 0;
        font-size: 1.72rem;
        font-weight: 800;
        letter-spacing: -0.3px;
      }

      .plan-head p {
        margin: 10px 0 0;
        color: #49566c;
        font-size: 0.92rem;
      }

      .plan-audience {
        margin: 16px 22px 10px;
        font-size: 0.88rem;
        color: #334155;
        font-weight: 700;
      }

      .module-list {
        list-style: none;
        margin: 0;
        padding: 8px 22px 20px;
        display: grid;
        gap: 11px;
      }

      .module-list li {
        display: flex;
        align-items: start;
        gap: 9px;
        color: #1f2937;
        line-height: 1.45;
        font-size: 0.93rem;
      }

      .module-list .material-icon {
        font-size: 19px;
        margin-top: 2px;
        color: #0f8b51;
      }

      .plan-cta {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 44px);
        margin: 6px auto 0;
        padding: 11px 16px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 700;
        font-size: 0.9rem;
        transition: all 0.25s ease;
      }

      .silver .plan-head {
        background: linear-gradient(135deg, #f8fafc, #eef2f7);
      }

      .silver .plan-cta {
        background: #e2e8f0;
        color: #334155;
      }

      .gold {
        border-color: #f6d08a;
        box-shadow: 0 22px 45px rgba(245, 158, 11, 0.2);
        transform: translateY(-12px);
      }

      .gold .plan-head {
        background: linear-gradient(135deg, #fff7dc, #f7de9e);
      }

      .gold .plan-cta {
        background: linear-gradient(135deg, #f59e0b, #f97316);
        color: #fff;
      }

      .premium .plan-head {
        background: linear-gradient(135deg, #e4efff, #cfe2ff);
      }

      .premium .plan-cta {
        background: #1d4f9c;
        color: #fff;
      }

      .plan-cta:hover {
        filter: brightness(1.05);
        transform: translateY(-1px);
      }

      .notes-section {
        background: #f7f9fd;
        padding: 0 24px 72px;
      }

      .notes-card {
        background: linear-gradient(135deg, #ffffff, #f3f7fe);
        border: 1px solid #dde8f7;
        border-radius: 18px;
        padding: 24px;
        box-shadow: 0 10px 22px rgba(17, 37, 74, 0.06);
      }

      .notes-card h3 {
        margin: 0 0 12px;
        font-size: 1.25rem;
        color: #13294d;
      }

      .notes-card p {
        margin: 0;
        color: #425068;
        line-height: 1.75;
      }

      @media (max-width: 1024px) {
        .plans-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: -46px;
        }

        .gold {
          transform: translateY(0);
        }
      }

      @media (max-width: 700px) {
        .plans-grid {
          grid-template-columns: 1fr;
          margin-top: -34px;
        }

        .page-header {
          padding: 106px 18px 68px;
        }

        .pricing-section {
          padding: 0 16px 24px;
        }

        .notes-section {
          padding: 0 16px 44px;
        }

        .plan-card {
          border-radius: 20px;
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
