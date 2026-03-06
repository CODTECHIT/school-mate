import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../../components/cta/cta.component';

@Component({
  selector: 'app-academic-management',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Academic Management</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Streamline Your <span class="highlight">Academic Workflow</span></h2>
            <p>
              The Academics Management module centralizes curriculum planning, teacher allocation,
              timetable execution, assessment workflows, and academic performance analytics in one
              place.
            </p>
            <ul class="feature-list">
              <li><span class="material-icon">check_circle</span> Curriculum & Subject Planning</li>
              <li><span class="material-icon">check_circle</span> Teacher & Subject Allocation</li>
              <li><span class="material-icon">check_circle</span> Academic Calendar & Timeline</li>
              <li><span class="material-icon">check_circle</span> Assessment & Grading System</li>
              <li><span class="material-icon">check_circle</span> Academic Performance Reports</li>
            </ul>
          </div>
          <div class="image-content">
            <div class="placeholder-img">
              <span class="material-icon">school</span>
            </div>
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
      .placeholder-img {
        background: #f8f9fa;
        height: 400px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #eee;
      }
      .placeholder-img .material-icon {
        font-size: 100px;
        color: #ddd;
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
export class AcademicManagement implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
