import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.css'
})
export class CtaComponent {
    constructor(private modalService: ModalService) { }

    openDemoModal() {
        this.modalService.openDemoModal();
    }
}
