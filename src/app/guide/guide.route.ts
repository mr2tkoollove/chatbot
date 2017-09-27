import { Routes } from '@angular/router';
import {guideRoute} from "./guide/guide.route";


const GUIDE_ROUTES = [
    guideRoute
];

export const guideState: Routes = [{
    path: '',
    children: GUIDE_ROUTES
}];
