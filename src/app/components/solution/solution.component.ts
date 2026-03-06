import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-solution',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './solution.component.html',
    styleUrl: './solution.component.css'
})
export class SolutionComponent {
    roles = [
        'Manager Login',
        'Director Login',
        'Principal Login',
        'Vice-Principal Login',
        'Head Teacher Login',
        'Teacher Login',
        'Front-Desk Login',
        'and other employees...'
    ];
}
