import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css',
})
export class SolutionComponent {
  roles = [
    'OTP Authentication',
    'Role-Based Access Control',
    'Session Security',
    'Audit Logs',
    'Data Encryption',
    'Two-Factor Authentication',
    'Secure API Endpoints',
    'Real-time Monitoring',
  ];
}
