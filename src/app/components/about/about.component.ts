import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
    constructor(private modalService: ModalService) { }

    openDemoModal() {
        this.modalService.openDemoModal();
    }
}
