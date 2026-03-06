import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ShowcaseImage {
  src: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent implements OnInit, OnDestroy {
  readonly showcaseImages: ShowcaseImage[] = [
    {
      src: 'mobile2.png',
      title: 'Student Dashboard',
      description: 'Attendance, homework, and exam updates in one view.',
    },
    {
      src: 'mobile3.png',
      title: 'Teacher App',
      description: 'Mark attendance, share updates, and manage daily activities.',
    },
    {
      src: 'mobile app.png',
      title: 'Mobile Experience',
      description: 'Role-based experience for students, teachers, and parents.',
    },
    {
      src: 'home_banner.png',
      title: 'School Overview',
      description: 'Clean interface built for complete school operations.',
    },
    {
      src: 'laptop2.png',
      title: 'Web Dashboard',
      description: 'Powerful desktop controls for admins and management.',
    },
  ];

  currentIndex = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  get currentImage(): ShowcaseImage {
    return this.showcaseImages[this.currentIndex];
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.showcaseImages.length;
  }

  prevSlide(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.showcaseImages.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2800);
  }

  stopAutoSlide(): void {
    if (!this.intervalId) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
