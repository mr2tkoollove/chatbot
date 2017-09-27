import { Routes } from '@angular/router';
import { CartComponent } from './cart.component';

export const cartRoute: Routes = [
    {
      path: 'cart',
      component: CartComponent,
      data: {
          pageTitle: 'Cart'
      }
    }
  ];
