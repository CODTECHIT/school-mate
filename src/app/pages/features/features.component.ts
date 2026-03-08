import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FeaturesComponent } from '../../components/features/features.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [CommonModule, FeaturesComponent, CtaComponent],
  template: `
    <div class="page-header">
      <h1>Our Features</h1>
    </div>
    <app-features></app-features>
    <app-cta></app-cta>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #2856A3, #5B2D8E);
      padding: 120px 24px 60px;
      text-align: center;
      color: white;
    }
    .page-header h1 { font-size: 3rem; font-weight: 800; }
  `]
})
export class FeaturesPageComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.title.setTitle('School Management Software Features | 100+ Features - Schoolmate');
    this.meta.updateTag({ name: 'description', content: 'Explore 100+ features of Schoolmate school management software including academic management, attendance tracking, fee management, transport management, exam management, library management & mobile apps.' });
    this.meta.updateTag({ name: 'keywords', content: 'school software features, academic management, attendance tracking, fee management, transport management, exam management, library management, homework management, student information system, school mobile app features' });
    this.meta.updateTag({ property: 'og:title', content: 'School Management Software Features | 100+ Features - Schoolmate' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore 100+ features of Schoolmate school management software.' });
  }
}
