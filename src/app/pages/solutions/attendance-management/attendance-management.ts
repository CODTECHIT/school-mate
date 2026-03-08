import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../../components/cta/cta.component';

@Component({
  selector: 'app-attendance-management',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Attendance Management</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="image-content">
            <img
              src="/images/solutions/attendance-management.svg"
              alt="Attendance Management overview"
              class="solution-image"
              loading="lazy"
            />
          </div>
          <div class="text-content">
            <h2>Effortless <span class="highlight">Attendance Tracking</span></h2>
            <p>
              The Attendance Management module supports dual-layer attendance tracking for both
              students and staff with real-time dashboards and alerts.
            </p>
            <ul class="feature-list">
              <li><span class="material-icon">check_circle</span> QR-Based Staff Attendance</li>
              <li><span class="material-icon">check_circle</span> Class-Wise Student Attendance</li>
              <li><span class="material-icon">check_circle</span> Real-Time Dashboards</li>
              <li><span class="material-icon">check_circle</span> Parent Notifications</li>
              <li><span class="material-icon">check_circle</span> Reports & Export Tools</li>
            </ul>
          </div>
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
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .content-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
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
        margin-bottom: 30px;
      }
      .feature-list {
        list-style: none;
        padding: 0;
      }
      .feature-list li {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 15px;
        font-weight: 500;
        color: #333;
      }
      .feature-list .material-icon {
        color: #2856a3;
      }
      .image-content {
        display: flex;
        justify-content: center;
      }
      .solution-image {
        width: 100%;
        max-width: 520px;
        border-radius: 20px;
        border: 1px solid #e2eaf5;
        box-shadow: 0 16px 36px rgba(17, 51, 102, 0.14);
      }
      @media (max-width: 768px) {
        .content-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .content-grid .image-content {
          order: 2;
        }
        .page-header h1 {
          font-size: 2.2rem;
        }
        h2 {
          font-size: 1.8rem;
        }
      }
    `,
  ],
})
export class AttendanceManagement implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
