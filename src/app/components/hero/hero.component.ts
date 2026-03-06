import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolCountUtil } from '../../utils/school-count.util';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
    stats: any[] = SchoolCountUtil.getAllStats();
    animatedValues: number[] = [];
    private animationFrameId: number | null = null;

    constructor(private modalService: ModalService) { }

    openDemoModal() {
        this.modalService.openDemoModal();
    }

    ngOnInit() {
        this.animatedValues = this.stats.map(() => 0);
        this.animateCounters();
    }

    ngOnDestroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
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
                this.animationFrameId = requestAnimationFrame(animate);
            }
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }

    scrollTo(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
