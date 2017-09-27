import { Route } from '@angular/router';

import { PolicyRegulationComponent } from './regulation.component';

export const regulationRoute: Route = {
    path: 'policies/regulation',
    component: PolicyRegulationComponent,
    data: {
        pageTitle: 'Quy định & Điều khoản'
    }
};
