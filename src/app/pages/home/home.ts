import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

type Slide = {
  img: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
};
@Component({
  selector: 'app-home',
  imports: [RouterModule, CarouselModule, CardModule, ButtonModule, DividerModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  steps = [{ label: 'Enquiry' }, { label: 'Documents' }, { label: 'Confirmation' }];

  slides: Slide[] = [
    {
      img: 'image1.jpg',
      title: 'A trusted school for strong foundations',
      subtitle: 'Nursery to 10th • Pillanna Garden, Bangalore • Focused academics & values.',
      ctaLabel: 'Admissions',
      ctaLink: '/admissions',
    },
    {
      img: 'image2.jpg',
      title: 'Learning, discipline and confidence',
      subtitle: 'Structured teaching, supportive environment, and steady progress.',
      ctaLabel: 'Academics',
      ctaLink: '/academics',
    },
    {
      img: 'image3.jpg',
      title: 'A campus that feels safe and welcoming',
      subtitle: 'Well-maintained facilities and student-first supervision.',
      ctaLabel: 'Facilities',
      ctaLink: '/gallery',
    },
    {
      img: 'image5.jpg',
      title: 'A campus that feels safe and welcoming',
      subtitle: 'Well-maintained facilities and student-first supervision.',
      ctaLabel: 'Facilities',
      ctaLink: '/gallery',
    },
  ];
}
