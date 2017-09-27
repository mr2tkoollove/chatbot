import { Routes } from '@angular/router';
import {ViewDetailProductComponent} from "./view-detail-product.component";

export const viewDetailProductRoute: Routes = [
    {
        path: 'webview/view-detail-product',
        component: ViewDetailProductComponent,
        data: {
            pageTitle: 'View Detail Product'
        }
    }
];
