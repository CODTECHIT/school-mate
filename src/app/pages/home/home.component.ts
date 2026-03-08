import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { AboutComponent } from '../../components/about/about.component';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';

import { SolutionComponent } from '../../components/solution/solution.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturesComponent,
    SolutionComponent,
    AboutComponent,
    IntegrationsComponent,
    ShowcaseComponent,
    ClientsComponent,
    StatsComponent,
    CtaComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-features [maxItems]="8" [showViewAllButton]="true"></app-features>
    <app-solution></app-solution>
    <app-about></app-about>
    <app-integrations></app-integrations>
    <app-showcase></app-showcase>
    <app-clients></app-clients>
    <app-stats></app-stats>
    <app-cta></app-cta>
  `,
})
export class HomePageComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    // Set page title
    this.title.setTitle('Schoolmate - Best School Management Software | ERP for Schools, Colleges & Institutes');

    // Set meta tags
    this.meta.updateTag({ name: 'description', content: 'Schoolmate is India\'s leading school management software & ERP for schools, colleges, institutes & coaching centers. Manage academics, attendance, fees, transport & more. 5000+ schools trust Schoolmate.' });
    this.meta.updateTag({ name: 'keywords', content: 'school management software, school ERP, school management system, college management software, institute management software, coaching center software, academic management software, student information system, fee management software, attendance management system, school mobile app, education ERP India' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Schoolmate - Best School Management Software | ERP for Smart Schools' });
    this.meta.updateTag({ property: 'og:description', content: 'India\'s leading school management software & ERP for schools, colleges & institutes. Manage academics, attendance, fees, transport & more. Get 5000+ FREE SMS.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.schoolmate.co.in/images/home_banner.png' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Schoolmate - Best School Management Software | ERP for Smart Schools' });
    this.meta.updateTag({ name: 'twitter:description', content: 'India\'s leading school management software & ERP for schools, colleges & institutes.' });
  }
}
