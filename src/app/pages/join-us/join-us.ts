import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Join Us</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <h2>Build Smarter <span class="highlight">Education Systems</span></h2>
        <p>
          SchoolMate is a complete digital school ecosystem with dedicated mobile apps for teachers,
          parents, drivers, students, and administrators.
        </p>
        <p>
          We are focused on building secure, scalable, cloud-based school ERP solutions that
          simplify attendance, fees, exams, transport, and communication for institutions of all
          sizes.
        </p>
        <div class="info-box">
          <h3>Work With Us</h3>
          <p>
            For career opportunities and collaboration, reach us at
            <a href="mailto:contact@schoolmate.co.in">contact@schoolmate.co.in</a>.
          </p>
          <p>
            You can also connect with our team at <a href="tel:+918074041675">+91 807 404 1675</a>.
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
      .info-box {
        background: #f8f9fa;
        padding: 32px;
        border-radius: 16px;
        margin-top: 28px;
        border: 1px solid #e8edf4;
      }
      .info-box h3 {
        color: #1a1b1f;
        margin: 0 0 12px;
      }
      .info-box a {
        color: #2856a3;
        font-weight: 600;
        text-decoration: none;
      }
    `,
  ],
})
export class JoinUs implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
