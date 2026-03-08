import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-in-the-news',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>In The News</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <h2>schoolmate <span class="highlight">Updates</span></h2>
        <p>
          schoolmate continues to expand as a complete digital ecosystem for schools and colleges,
          supporting academics, attendance, fees, transport, and examination workflows in one
          platform.
        </p>
        <ul class="feature-list">
          <li><span class="material-icon">check_circle</span> 100+ modules and reports</li>
          <li>
            <span class="material-icon">check_circle</span> Cloud-based and role-based access for
            all stakeholders
          </li>
          <li>
            <span class="material-icon">check_circle</span> Mobile apps for teachers, parents,
            students, and drivers
          </li>
        </ul>
        <div class="info-box">
          <p>
            For media inquiries and official announcements, please contact
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
export class InTheNews implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
