import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./task.component').then((c) => c.TaskComponent),
  },
];
