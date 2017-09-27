import { Routes } from '@angular/router';
import { CartLineComponent } from './cart-line.component';

export const cartLineRoute: Routes = [
    {
      path: 'cart-line',
      component: CartLineComponent,
      data: {
          pageTitle: 'Cart Line'
      }
    }
  ];
