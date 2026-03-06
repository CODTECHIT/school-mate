import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Privacy Policy</h1>
    </div>
    <div class="page-content">
      <div class="container legal-content">
        <h2>Our Privacy Policy</h2>
        <p>
          SchoolMate explains how personal information is collected, used, shared, and protected,
          and what choices users have with respect to their data.
        </p>

        <h3>Information We Collect</h3>
        <ul>
          <li>Name and contact details such as email, phone number, and address.</li>
          <li>School details for onboarding and account setup.</li>
          <li>Account credentials and service-related usage information.</li>
          <li>Billing-related details required to process subscriptions.</li>
        </ul>

        <h3>How We Use Information</h3>
        <ul>
          <li>To create and manage user accounts and permissions.</li>
          <li>To support attendance, fee, and operational workflows.</li>
          <li>To provide notifications, service updates, and customer support.</li>
        </ul>

        <h3>Policy Updates & Consent</h3>
        <p>
          This policy may be revised periodically. Continued usage implies consent to the latest
          published policy terms.
        </p>

        <h3>Contact Information</h3>
        <p>Phone: <a href="tel:+918074041675">+91 807 404 1675</a></p>
        <p>Email: <a href="mailto:contact@schoolmate.co.in">contact@schoolmate.co.in</a></p>
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
      }
      .container {
        max-width: 900px;
        margin: 0 auto;
      }
      .legal-content h2 {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: #1a1b1f;
      }
      .legal-content h3 {
        font-size: 1.25rem;
        margin: 24px 0 10px;
        color: #1a2a4a;
      }
      .legal-content p {
        font-size: 1rem;
        color: #4d5663;
        line-height: 1.8;
        margin-bottom: 10px;
      }
      .legal-content ul {
        padding-left: 20px;
        margin: 0 0 8px;
      }
      .legal-content li {
        margin-bottom: 10px;
        color: #4d5663;
        line-height: 1.7;
      }
      .legal-content a {
        color: #2856a3;
        font-weight: 600;
        text-decoration: none;
      }
    `,
  ],
})
export class PrivacyPolicy implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
