import { Routes } from '@angular/router';
import {ViewDetailCartComponent} from "./view-detail-cart.component";

export const viewDetailCartRoute: Routes = [
    {
        path: 'webview/view-detail-cart',
        component: ViewDetailCartComponent,
        data: {
            pageTitle: 'Page'
        }
    }
];
