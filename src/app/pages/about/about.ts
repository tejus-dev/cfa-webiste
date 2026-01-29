import { Component, ElementRef, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [CardModule, RevealOnScrollDirective],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  @Input() revealDelay = 0; // ms
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          node.classList.add('reveal--in');
          if (this.revealOnce) this.observer?.disconnect();
        } else if (!this.revealOnce) {
          node.classList.remove('reveal--in');
        }
      },
      { threshold: 0.15 },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
