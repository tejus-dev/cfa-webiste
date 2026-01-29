import { Directive, ElementRef, Input, AfterViewInit, DestroyRef, inject } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit {
  // IMPORTANT: attribute-only usage passes "" (string), so input must accept string
  @Input() revealOnScroll: string | number = 0; // delay in ms (optional)
  @Input() revealOnce = true;

  private el = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;

    node.classList.add('reveal');

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('reveal--in');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const delay = Number(this.revealOnScroll) || 0;
          if (delay) node.style.transitionDelay = `${delay}ms`;

          node.classList.add('reveal--in');

          if (this.revealOnce) obs.unobserve(node);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -10% 0px' },
    );

    obs.observe(node);
    this.destroyRef.onDestroy(() => obs.disconnect());
  }
}
