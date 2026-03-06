import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Terms of Use</h1>
    </div>
    <div class="page-content">
      <div class="container legal-content">
        <h2>Our Terms and Conditions</h2>
        <p>
          SchoolMate provides a cloud-based ERP platform for secure and streamlined school
          administration. By using the service, users agree to the terms below.
        </p>

        <h3>Use of Service</h3>
        <ul>
          <li>Use the service only for legal and ethical activities.</li>
          <li>Keep account credentials confidential and do not share login access.</li>
          <li>Follow subscription, payment, and renewal terms as agreed with SchoolMate.</li>
        </ul>

        <h3>Restrictions and Suspension</h3>
        <p>
          SchoolMate reserves the right to modify features, restrict access, or suspend services in
          cases of policy violations, misuse, or required maintenance.
        </p>

        <h3>Termination</h3>
        <p>
          Accounts may be suspended or terminated for violations of terms. On termination,
          current-year data export support is available in MS Excel format.
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
export class TermsOfUse implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
