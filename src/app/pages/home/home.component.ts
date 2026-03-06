import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { AboutComponent } from '../../components/about/about.component';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { CtaComponent } from '../../components/cta/cta.component';

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
    ClientsComponent,
    StatsComponent,
    CtaComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-features></app-features>
    <app-solution></app-solution>
    <app-about></app-about>
    <app-integrations></app-integrations>
    <app-clients></app-clients>
    <app-stats></app-stats>
    <app-cta></app-cta>
  `
})
export class HomePageComponent { }
