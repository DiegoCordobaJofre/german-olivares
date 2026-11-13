import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: { seo: 'home' },
  },
  {
    path: 'trayectoria',
    loadComponent: () => import('./pages/career/career.component').then((m) => m.CareerComponent),
    data: { seo: 'career' },
  },
  {
    path: 'historia',
    loadComponent: () => import('./pages/story/story.component').then((m) => m.StoryComponent),
    data: { seo: 'story' },
  },
  {
    path: 'prensa',
    loadComponent: () => import('./pages/press/press.component').then((m) => m.PressComponent),
    data: { seo: 'press' },
  },
  {
    path: 'taller',
    loadComponent: () => import('./pages/workshop/workshop.component').then((m) => m.WorkshopComponent),
    data: { seo: 'workshop' },
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    data: { seo: 'contact' },
  },
  { path: '**', redirectTo: '' },
];
