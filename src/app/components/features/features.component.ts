import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './features.component.html',
    styleUrl: './features.component.css'
})
export class FeaturesComponent {
    features = [
        { icon: 'handyman', title: 'Easy Setup', description: 'We provide complete setup and step-by-step guidance so you can manage your school without any hassle' },
        { icon: 'devices', title: 'Responsive Mobile', description: '100% responsive design. Works flawlessly on all devices.' },
        { icon: 'notification_important', title: 'Smart Defaulter Alerts', description: 'Track fee defaulters instantly and take action with ease.' },
        { icon: 'cloud', title: 'Cloud-Based Platform', description: 'With Aws cloud hosting, you can access your data anytime, anywhere, without any interruptions.' },
        { icon: 'dynamic_feed', title: 'Quick Data Migration', description: 'Enjoy free and speedy transfer of all your data from files or previous software.' },
        { icon: 'groups', title: 'Engage Everyone', description: 'Built to engage every teacher, admin & parent with ease.' },
        { icon: 'lock', title: 'Encrypted Data', description: 'Your data stays cloud-secured and instantly accessible anytime.' },
        { icon: 'receipt_long', title: 'Customized Fee Records', description: 'Handle each student’s fee details and print or export with ease.' },
    ];
}
