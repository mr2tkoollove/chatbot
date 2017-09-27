import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';

export const accountRoute: Routes = [
    {
      path: 'app-account',
      component: AccountComponent,
      data: {
          pageTitle: 'Account'
      }
    }
  ];
