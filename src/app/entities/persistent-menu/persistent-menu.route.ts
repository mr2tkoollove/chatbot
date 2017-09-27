import { Routes } from '@angular/router';
import { PersistentMenuComponent } from "./persistent-menu.component";

export const persistentMenuRoute: Routes = [
    {
      path: 'persistent-menu',
      component: PersistentMenuComponent,
      data: {
          pageTitle: 'Persistent-menu'
      }
    }
  ];
