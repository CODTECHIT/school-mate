import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../../components/cta/cta.component';

@Component({
  selector: 'app-transport-management',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Transport Management</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Safety First <span class="highlight">Transport Solutions</span></h2>
            <p>
              The Transport Management module provides a complete digital system for routes,
              drivers, vehicles, and live movement tracking to improve safety and coordination.
            </p>
            <ul class="feature-list">
              <li><span class="material-icon">check_circle</span> Vehicle & Route Management</li>
              <li><span class="material-icon">check_circle</span> Driver & Staff Records</li>
              <li><span class="material-icon">check_circle</span> Live GPS Tracking</li>
              <li><span class="material-icon">check_circle</span> Transport Fee Automation</li>
              <li><span class="material-icon">check_circle</span> Alerts for Parents</li>
            </ul>
          </div>
          <div class="image-content">
            <img
              src="/images/solutions/transport-management.svg"
              alt="Transport Management overview"
              class="solution-image"
              loading="lazy"
            />
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
export class TransportManagement implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
