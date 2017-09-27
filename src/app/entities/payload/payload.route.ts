import { Routes } from '@angular/router';
import {PayloadComponent} from "./payload.component";

export const payloadRoute: Routes = [
    {
        path: 'payload',
        component: PayloadComponent,
        data: {
            pageTitle: 'Payload'
        }
    }
];
