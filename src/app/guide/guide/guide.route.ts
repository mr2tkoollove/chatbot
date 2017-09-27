import { Route } from '@angular/router';

import {GuideComponent} from './guide.component';

export const guideRoute: Route = {
    path: 'guide',
    component: GuideComponent,
    data: {
        pageTitle: 'Hướng dẫn'
    }
};
