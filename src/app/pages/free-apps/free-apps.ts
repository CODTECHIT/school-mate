import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-our-free-apps',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Our Free Apps</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <h2>SchoolMate <span class="highlight">Mobile Apps</span></h2>
        <p>
          SchoolMate's mobile apps deliver a complete school management experience for parents,
          teachers, transport drivers, and administrators with role-based access.
        </p>
        <p>
          Parents get real-time attendance, homework, exam, fee, and transport updates. Teachers can
          mark attendance, assign homework, and send announcements. Administrators can monitor
          academics and operations from one platform.
        </p>
        <ul class="feature-list">
          <li>
            <span class="material-icon">check_circle</span> Dedicated role-based mobile experience
          </li>
          <li>
            <span class="material-icon">check_circle</span> Real-time communication and alerts
          </li>
          <li>
            <span class="material-icon">check_circle</span> Android-ready apps for daily school
            operations
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
export class OurFreeApps implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
