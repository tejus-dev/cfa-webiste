import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

type Stage = {
  title: string;
  subtitle: string;
  points: string[];
};

@Component({
  selector: 'app-academics',
  imports: [CardModule, CommonModule],
  templateUrl: './academics.html',
  styleUrl: './academics.scss',
})
export class Academics {
  // ✅ DATA-DRIVEN CONTENT
  stages: Stage[] = [
    {
      title: 'Nursery & Kindergarten',
      subtitle: 'Building foundations',
      points: [
        'Focus on basic literacy and numeracy',
        'Activity-based learning and play-way methods',
        'Developing discipline, habits and confidence',
        'Personal attention and care for every child',
      ],
    },
    {
      title: 'Primary School (1st to 5th)',
      subtitle: 'Strong fundamentals',
      points: [
        'Clear understanding of core subjects',
        'Reading, writing and problem-solving skills',
        'Regular assessments and teacher guidance',
        'Balanced focus on academics and activities',
      ],
    },
    {
      title: 'Middle School (6th to 8th)',
      subtitle: 'Concept clarity & discipline',
      points: [
        'Strengthening subject fundamentals',
        'Improving independent study habits',
        'Continuous evaluation and feedback',
        'Preparing students for higher academic demands',
      ],
    },
    {
      title: 'High School (9th & 10th)',
      subtitle: 'Board exam preparation',
      points: [
        'Focused preparation for board examinations',
        'Regular tests, revisions and doubt-clearing sessions',
        'Special attention to weak areas',
        'Guidance, discipline and performance tracking',
      ],
    },
  ];
}
