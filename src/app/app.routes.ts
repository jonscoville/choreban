import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        title: 'Home',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
                title: 'Dashboard'
            },
            {
                path: 'tasks',
                loadComponent: () => import('./features/tasks/tasks').then(m => m.Tasks),
                title: 'Tasks'
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./core/auth/login/login').then(m => m.Login),
        title: 'Login'
    }
];
