import { Routes } from '@angular/router';
import { StoreComponent } from './store.component';

export const storeRoute: Routes = [
    {
      path: 'store',
      component: StoreComponent,
      data: {
          pageTitle: 'Store'
      }
    }
  ];
