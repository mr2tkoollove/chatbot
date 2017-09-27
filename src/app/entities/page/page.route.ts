import { Routes } from '@angular/router';
import { PageComponent } from './page.component';

export const pageRoute: Routes = [
    {
        path: 'page',
        component: PageComponent,
        data: {
            pageTitle: 'Page'
        }
    }
];
