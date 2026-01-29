import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Admissions } from './pages/admissions/admissions';
import { Facilities } from './pages/facilities/facilities';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: Home, title: 'CF Andrews High School' },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'academics',
    loadComponent: () => import('./pages/academics/academics').then((m) => m.Academics),
  },
  { path: 'facilities', component: Facilities, title: 'Facilities - CF Andrews' },
  { path: 'gallery', component: Gallery, title: 'Gallery - CF Andrews' },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },

  // fallback
  { path: '**', redirectTo: '' },
];
