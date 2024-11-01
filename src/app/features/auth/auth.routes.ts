import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./auth.component').then((c) => c.AuthComponent),
    },
]