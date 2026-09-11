import { Routes } from '@angular/router';
import { SingerDashboard } from './singer-dashboard/singer-dashboard';
import { SingerGraph } from './singer-graph/singer-graph';

export const routes: Routes = [
    {
        path: '',
        component: SingerDashboard
    },
    {
        path: 'singers',
        component: SingerGraph
    }
];
