import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolCountUtil } from '../../utils/school-count.util';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit, OnDestroy {
    stats = [
        { label: 'Schools', value: SchoolCountUtil.getSchoolCount(), suffix: '+', icon: 'school' },
        { label: 'Students', value: SchoolCountUtil.getStudentCount(), suffix: '+', icon: 'groups' },
        { label: 'Modules', value: SchoolCountUtil.getModuleCount(), suffix: '+', icon: 'widgets' },
        { label: 'Client Retention', value: SchoolCountUtil.getClientRetention(), suffix: '%', icon: 'favorite' },
    ];

    animatedValues: number[] = [];
    private hasAnimated = false;
    private observer: IntersectionObserver | null = null;

    ngOnInit() {
        this.animatedValues = this.stats.map(() => 0);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }

    ngAfterViewInit() {
        const el = document.getElementById('stats-section');
        if (el) {
            this.observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;
                    this.animateCounters();
                }
            }, { threshold: 0.3 });
            this.observer.observe(el);
        }
    }

    private animateCounters() {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            this.animatedValues = this.stats.map(stat => Math.floor(stat.value * easeOut));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}
