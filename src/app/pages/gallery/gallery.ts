import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { GALLERY_IMAGES } from './gallery-images';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

type Img = { src: string; title: string };

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, GalleriaModule, CardModule , RevealOnScrollDirective], 
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  images: Img[] = [...GALLERY_IMAGES];

  // simple lightbox
  lightboxOpen = false;
  activeIndex = 0;

  open(i: number) {
    this.activeIndex = i;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  onKey(e: KeyboardEvent) {
    if (!this.lightboxOpen) return;

    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
