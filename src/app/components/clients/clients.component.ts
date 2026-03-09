import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataUtil, ClientLogo, Testimonial } from '../../utils/client-data.util';

@Component({
  selector: 'app-clients',
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  readonly clientLogos: ClientLogo[] = ClientDataUtil.getClientLogos();
  readonly testimonials: Testimonial[] = ClientDataUtil.getTestimonials();
  readonly duplicatedLogos: ClientLogo[] = [...this.clientLogos, ...this.clientLogos];
  activeTestimonial = 0;

  nextTestimonial(): void {
    this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.activeTestimonial =
      this.activeTestimonial === 0 ? this.testimonials.length - 1 : this.activeTestimonial - 1;
  }
}
