import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { CtaComponent } from '../../components/cta/cta.component';
import { RouterModule } from '@angular/router';

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  audience: string;
  modules: string[];
  accentClass: string;
  badge?: string;
  buttonText: string;
  buttonClass: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, CtaComponent, RouterModule],
  template: `
    <section class="pricing-hero">
      <!-- Abstract Background Elements (Glassmorphism Pill Shapes) -->
      <div class="bg-elements">
        <div class="pill pill-1"></div>
        <div class="pill pill-2"></div>
        <div class="pill pill-3"></div>
        <div class="pill pill-4"></div>
        <div class="pill pill-5"></div>
      </div>

      <div class="container relative z-10">
        <header class="section-header">
          <h1>Plans & Features</h1>
          <p class="hero-desc">Choose the perfect plan for your school's digital transformation</p>
        </header>

        <div class="plans-grid">
          <article 
            *ngFor="let plan of plans" 
            class="plan-card" 
            [ngClass]="plan.accentClass"
          >
            <!-- Best Value Badge -->
            <div class="plan-badge" *ngIf="plan.badge">
              {{ plan.badge }}
            </div>

            <div class="plan-content">
              <div class="plan-header-box">
                <h2 class="plan-name">{{ plan.name }}</h2>
                <p class="plan-subtitle">{{ plan.subtitle }}</p>
              </div>
              
              <div class="plan-audience">
                <strong>Best For:</strong> {{ plan.audience }}
              </div>

              <ul class="feature-list">
                <li *ngFor="let module of plan.modules">
                  <span class="dot"></span>
                  {{ module }}
                </li>
              </ul>

              <div class="spacer"></div>

              <a [routerLink]="['/contact']" class="btn-buy" [ngClass]="plan.buttonClass">
                {{ plan.buttonText }}
              </a>
            </div>
          </article>
        </div>

        <div class="compare-link">
          <a routerLink="/contact">Request detailed comparison</a>
        </div>
      </div>

      <!-- Floating Explore Circle -->
      <div class="explore-solutions">
        <span>Full<br>Feature<br>List</span>
      </div>
    </section>

    <!-- Notes Section -->
    <section class="notes-section">
      <div class="container">
        <div class="notes-card">
          <h3>How Plans Are Structured</h3>
          <p>
            Silver includes core operations, Gold adds deeper administration and tracking, and Premium
            focuses on automation, security, and enterprise workflows for larger institutions.
          </p>
        </div>
      </div>
    </section>

    <app-cta></app-cta>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: #fdfdfd;
        overflow-x: hidden;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }

      .pricing-hero {
        position: relative;
        padding: 140px 24px 100px;
        min-height: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fafbfc;
      }

      .container {
        max-width: 1240px;
        margin: 0 auto;
        width: 100%;
      }

      .relative { position: relative; }
      .z-10 { z-index: 10; }

      /* Abstract Background Shapes */
      .bg-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
      }

      .pill {
        position: absolute;
        border-radius: 100px;
        filter: blur(10px);
        opacity: 0.5;
        background: linear-gradient(135deg, #4f87ff, #7eb6ff);
        transform: rotate(-35deg);
      }

      .pill-1 { width: 120px; height: 350px; top: 15%; left: -40px; opacity: 0.6; box-shadow: 0 0 40px rgba(79, 135, 255, 0.4); }
      .pill-2 { width: 180px; height: 100px; top: 20%; left: 40%; transform: rotate(20deg); background: #7eb6ff; opacity: 0.2; filter: blur(30px); }
      .pill-3 { width: 150px; height: 400px; top: 10%; right: -50px; background: linear-gradient(to bottom, #306eff, #8db5ff); transform: rotate(35deg); opacity: 0.4; }
      .pill-4 { width: 160px; height: 160px; bottom: 10%; right: 15%; border-radius: 50%; background: radial-gradient(circle, #00d2ff, transparent); filter: blur(60px); opacity: 0.3; }
      .pill-5 { width: 200px; height: 200px; bottom: 5%; left: 10%; border-radius: 50%; background: radial-gradient(circle, #4f87ff, transparent); filter: blur(80px); opacity: 0.2; }

      /* Header */
      .section-header {
        text-align: center;
        margin-bottom: 50px;
      }

      .section-header h1 {
        font-size: 2.75rem;
        font-weight: 800;
        color: #1e293b;
        margin: 0 0 12px;
        letter-spacing: -0.02em;
      }

      .hero-desc {
        font-size: 1.15rem;
        color: #64748b;
        max-width: 550px;
        margin: 0 auto;
        font-weight: 500;
      }

      /* Plans Grid */
      .plans-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        align-items: stretch;
      }

      /* Plan Card Base */
      .plan-card {
        position: relative;
        background: #ffffff;
        border-radius: 32px;
        padding: 45px 35px;
        box-shadow: 0 15px 45px rgba(0, 50, 150, 0.05);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.03);
        display: flex;
        flex-direction: column;
      }

      .plan-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 35px 70px rgba(0, 50, 150, 0.1);
      }

      .plan-card.silver { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(12px); }
      .plan-card.gold { z-index: 2; box-shadow: 0 45px 90px rgba(0, 50, 150, 0.12); border-color: rgba(37, 99, 235, 0.1); }
      .plan-card.gold .plan-name { color: #2563eb; }
      .plan-card.premium { background: #2563eb; color: #ffffff; border: none; }
      .plan-card.premium .plan-name, .plan-card.premium .plan-subtitle, .plan-card.premium .plan-audience { color: #ffffff; }

      .plan-badge {
        position: absolute;
        top: 30px;
        right: 30px;
        background: #111827;
        color: #fff;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 800;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      .plan-header-box { margin-bottom: 20px; }

      .plan-name {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 6px;
        color: #1e293b;
        letter-spacing: -0.01em;
      }

      .plan-subtitle { font-size: 0.95rem; color: #64748b; font-weight: 600; }

      .plan-audience {
        font-size: 0.85rem;
        padding: 10px 14px;
        background: rgba(37, 99, 235, 0.05);
        border-radius: 12px;
        margin-bottom: 25px;
        color: #475569;
        line-height: 1.4;
      }

      .plan-card.premium .plan-audience { background: rgba(255, 255, 255, 0.1); }

      .feature-list {
        list-style: none;
        padding: 0;
        margin: 0 0 30px;
        flex-grow: 1;
      }

      .feature-list li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 12px;
        font-size: 0.88rem;
        color: #475569;
        font-weight: 500;
        line-height: 1.4;
      }

      .plan-card.premium .feature-list li { color: rgba(255, 255, 255, 0.9); }
      .dot { width: 4px; height: 4px; background: #94a3b8; border-radius: 50%; margin-top: 7px; flex-shrink: 0; }
      .plan-card.premium .dot { background: rgba(255, 255, 255, 0.5); }

      .spacer { flex-grow: 1; }

      /* Buttons */
      .btn-buy {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 16px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        transition: all 0.3s ease;
        margin-top: 15px;
      }

      .btn-silver { background: #000000; color: #ffffff; }
      .btn-gold { background: linear-gradient(135deg, #2563eb, #1e40af); color: #ffffff; box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3); }
      .btn-premium { background: #ffffff; color: #2563eb; }

      .btn-buy:hover { transform: translateY(-2px); filter: brightness(1.1); }

      /* Compare Link */
      .compare-link { text-align: center; margin-top: 50px; }
      .compare-link a { color: #2563eb; text-decoration: none; font-weight: 600; font-size: 1rem; border-bottom: 2px solid rgba(37, 99, 235, 0.2); padding-bottom: 4px; transition: all 0.3s ease; }
      .compare-link a:hover { border-bottom-color: #2563eb; }

      /* Explore Circle */
      .explore-solutions { position: absolute; bottom: 40px; right: 40px; width: 95px; height: 95px; background: #1e293b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 0.72rem; font-weight: 700; cursor: pointer; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2); }

      /* Notes Section */
      .notes-section { padding: 60px 24px; background: #ffffff; }
      .notes-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 32px; padding: 40px; max-width: 1100px; margin: 0 auto; }
      .notes-card h3 { margin: 0 0 15px; font-size: 1.5rem; color: #0f172a; font-weight: 800; }
      .notes-card p { margin: 0; line-height: 1.8; color: #475569; font-size: 1rem; }

      @media (max-width: 1100px) { .plans-grid { grid-template-columns: repeat(2, 1fr); } .plan-card.gold { order: -1; grid-column: span 2; max-width: 500px; margin: 0 auto; width: 100%; } }
      @media (max-width: 768px) { .section-header h1 { font-size: 2.2rem; } .plans-grid { grid-template-columns: 1fr; } .plan-card.gold { grid-column: span 1; } .explore-solutions { display: none; } }

    `,
  ],
})
export class PricingPageComponent implements OnInit {
  plans: Plan[] = [
    {
      id: 'silver',
      name: 'Silver',
      subtitle: 'Essential digital operations',
      audience: 'Schools starting digital transformation',
      accentClass: 'silver',
      buttonText: 'Book A Demo',
      buttonClass: 'btn-silver',
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
      id: 'gold',
      name: 'Gold',
      subtitle: 'Advanced daily administration',
      audience: 'Growing schools with multi-department workflows',
      badge: 'Most Popular',
      accentClass: 'gold',
      buttonText: 'Book A Demo',
      buttonClass: 'btn-gold',
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
      id: 'premium',
      name: 'Premium',
      subtitle: 'Enterprise automation and control',
      audience: 'Large institutions and multi-branch groups',
      accentClass: 'premium',
      buttonText: 'Book A Demo',
      buttonClass: 'btn-premium',
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

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.title.setTitle('Pricing Plans | Schoolmate - School Management Software');
    this.meta.updateTag({ name: 'description', content: 'Choose from Silver, Gold, and Premium plans for your school. 100+ modules for administration, attendance, fees, and more.' });
  }
}
