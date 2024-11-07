import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/task/task.routes').then((r) => r.routes),
  },
];
