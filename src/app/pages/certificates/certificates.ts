import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Certificates</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <h2>Platform Trust & <span class="highlight">Compliance</span></h2>
        <p>
          SchoolMate provides a secure, cloud-based ERP platform designed to protect institutional
          data and keep operations reliable across attendance, fees, academics, and communication
          workflows.
        </p>
        <ul class="feature-list">
          <li>
            <span class="material-icon">check_circle</span> Cloud-Based Platform with anytime access
          </li>
          <li>
            <span class="material-icon">check_circle</span> Encrypted data and secure access
            controls
          </li>
          <li>
            <span class="material-icon">check_circle</span> Role-based security and permissions
          </li>
          <li>
            <span class="material-icon">check_circle</span> Automatic cloud backups for continuity
          </li>
        </ul>
        <div class="info-box">
          <p>
            For detailed certification or compliance documents, contact us at
            <a href="mailto:contact@schoolmate.co.in">contact@schoolmate.co.in</a>.
          </p>
        </div>
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
        margin: 26px 0;
        text-align: left;
      }
      .feature-list li {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-bottom: 12px;
        color: #2f3541;
        font-weight: 500;
      }
      .feature-list .material-icon {
        color: #2856a3;
      }
      .info-box {
        background: #f8f9fa;
        padding: 22px;
        border-radius: 12px;
        border: 1px solid #e8edf4;
      }
      .info-box a {
        color: #2856a3;
        font-weight: 600;
        text-decoration: none;
      }
    `,
  ],
})
export class Certificates implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
