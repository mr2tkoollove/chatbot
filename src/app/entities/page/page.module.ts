import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { pageRoute } from './page.route';
import { PageService } from './page.service';

const ENTITY_STATES = [
    ...pageRoute,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(ENTITY_STATES)
    ],
    declarations: [
        PageComponent,
    ],
    entryComponents: [
      PageComponent,
    ],
    providers: [
      PageService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule {}
