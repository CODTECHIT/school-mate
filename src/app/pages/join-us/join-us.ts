import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  template: \
    <div class="page-header">
      <h1>Join Us</h1>
    </div>
    <div class="page-content">
      <div class="container">
        <h2>Join Us <span class="highlight">Solutions</span></h2>
        <p>Become a part of the fastest growing educational technology team.</p>
        <div class="placeholder-box">
          <p>Detailed content for Join Us is coming soon. Stay tuned!</p>
        </div>
      </div>
    </div>
    <app-cta></app-cta>
  \,
  styles: [\
    .page-header {
      background: linear-gradient(135deg, #2856A3, #5B2D8E);
      padding: 120px 24px 60px;
      text-align: center;
      color: white;
    }
    .page-header h1 { font-size: 3rem; font-weight: 800; margin: 0; }
    .page-content { padding: 80px 24px; text-align: center; }
    .container { max-width: 900px; margin: 0 auto; }
    .highlight { color: #2856A3; }
    h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 24px; color: #1a1b1f; }
    p { font-size: 1.2rem; color: #666; line-height: 1.8; margin-bottom: 40px; }
    .placeholder-box { background: #f8f9fa; padding: 60px; border-radius: 20px; border: 2px dashed #eee; }
  \]
})
export class JoinUs implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
}
