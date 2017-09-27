import { Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const userRoute: Routes = [
    {
      path: 'user',
      component: UserComponent,
      data: {
          pageTitle: 'User'
      }
    }
  ];
