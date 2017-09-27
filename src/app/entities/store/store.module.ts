import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { storeRoute } from './store.route';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';

const ENTITY_STATES = [
    ...storeRoute,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(ENTITY_STATES)
    ],
    declarations: [
        StoreComponent,
    ],
    entryComponents: [
      StoreComponent,
    ],
    providers: [
      StoreService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreModule {}
