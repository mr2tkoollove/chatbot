import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule} from '@angular/router';
import {guideState} from './guide.route';

import {GuideComponent} from "./guide/guide.component";

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(guideState)
    ],
    declarations: [
        GuideComponent
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GuideModule {}
