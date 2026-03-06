import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataUtil, ClientLogo, Testimonial } from '../../utils/client-data.util';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.css'
})
export class ClientsComponent {
    clientLogos: ClientLogo[] = ClientDataUtil.getClientLogos();
    testimonials: Testimonial[] = ClientDataUtil.getTestimonials();
    activeTestimonial = 0;

    // Duplicate logos for infinite scroll effect
    get duplicatedLogos(): ClientLogo[] {
        return [...this.clientLogos, ...this.clientLogos];
    }

    nextTestimonial() {
        this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }

    prevTestimonial() {
        this.activeTestimonial = this.activeTestimonial === 0
            ? this.testimonials.length - 1
            : this.activeTestimonial - 1;
    }
}
