import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnChanges, OnDestroy {
  private readonly rotationDelayMs = 2000;
  private readonly transitionDurationMs = 650;
  private rotationTimers = new Map<number, number>();
  private transitionTimers = new Map<number, number>();
  activeImageIndexes: number[] = [];
  isTransitioning: boolean[] = [];

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeRotations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.initializeRotations();
    }
  }

  getProjectImages(project: any): string[] {
    if (Array.isArray(project?.images) && project.images.length) {
      return project.images;
    }

    return project?.imagePath ? [project.imagePath] : [];
  }

  getActiveImage(project: any, projectIndex: number): string | undefined {
    const images = this.getProjectImages(project);

    if (!images.length) {
      return undefined;
    }

    return images[this.activeImageIndexes[projectIndex] ?? 0];
  }

  getPrimaryProjectLink(project: any): string | null {
    return project?.liveUrl || project?.frontendRepoUrl || project?.backendRepoUrl || null;
  }

  isExternalLink(url: string | null | undefined): boolean {
    return !!url && (url.startsWith('http') || url.includes('.'));
  }

  showPreviousImage(project: any, projectIndex: number, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.stepImage(project, projectIndex, -1);
  }

  showNextImage(project: any, projectIndex: number, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.stepImage(project, projectIndex, 1);
  }

  ngOnDestroy(): void {
    this.clearRotations();
  }

  private initializeRotations(): void {
    this.clearRotations();

    const projects = this.data?.projects ?? [];
    this.activeImageIndexes = projects.map(() => 0);
    this.isTransitioning = projects.map(() => false);

    projects.forEach((project: any, projectIndex: number) => {
      const images = this.getProjectImages(project);

      if (images.length <= 1) {
        return;
      }

      this.startRotation(project, projectIndex);
    });
  }

  private clearRotations(): void {
    if (typeof window === 'undefined') {
      this.rotationTimers.clear();
      this.transitionTimers.clear();
      return;
    }

    this.rotationTimers.forEach((timer) => window.clearInterval(timer));
    this.rotationTimers.clear();
    this.transitionTimers.forEach((timer) => window.clearTimeout(timer));
    this.transitionTimers.clear();
  }

  private startRotation(project: any, projectIndex: number): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.stopRotation(projectIndex);

    const timer = window.setInterval(() => {
      this.stepImage(project, projectIndex, 1, false);
    }, this.rotationDelayMs);

    this.rotationTimers.set(projectIndex, timer);
  }

  private stopRotation(projectIndex: number): void {
    const timer = this.rotationTimers.get(projectIndex);

    if (timer !== undefined) {
      window.clearInterval(timer);
      this.rotationTimers.delete(projectIndex);
    }
  }

  private stepImage(project: any, projectIndex: number, direction: number, restartTimer = true): void {
    const images = this.getProjectImages(project);

    if (images.length <= 1 || typeof window === 'undefined' || this.isTransitioning[projectIndex]) {
      return;
    }

    if (restartTimer) {
      this.startRotation(project, projectIndex);
    }

    this.isTransitioning[projectIndex] = true;

    const timer = window.setTimeout(() => {
      const currentIndex = this.activeImageIndexes[projectIndex] ?? 0;
      this.activeImageIndexes[projectIndex] = (currentIndex + direction + images.length) % images.length;
      this.isTransitioning[projectIndex] = false;
      this.transitionTimers.delete(projectIndex);
    }, this.transitionDurationMs);

    this.transitionTimers.set(projectIndex, timer);
  }

}
