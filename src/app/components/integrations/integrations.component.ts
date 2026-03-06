import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-integrations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './integrations.component.html',
    styleUrl: './integrations.component.css'
})
export class IntegrationsComponent {
    integrations = [
        { icon: 'chat', name: 'WhatsApp', description: 'Instant parent-teacher communication' },
        { icon: 'fingerprint', name: 'Biometric', description: 'Automated attendance tracking' },
        { icon: 'credit_card', name: 'Online Payment', description: 'Secure fee collection gateway' },
        { icon: 'quiz', name: 'E-Exam', description: 'Online examination system' },
        { icon: 'gps_fixed', name: 'GPS Tracking', description: 'Vehicle tracking system' },
        { icon: 'qr_code', name: 'Barcode/QR', description: 'Library & ID management' },
        { icon: 'calculate', name: 'Tally Integration', description: 'Accounting sync' },
        { icon: 'video_camera_front', name: 'Virtual Class', description: 'Online classroom solution' },
    ];
}
