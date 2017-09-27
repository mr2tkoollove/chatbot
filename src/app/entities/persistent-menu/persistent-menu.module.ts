import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersistentMenuComponent } from "./persistent-menu.component";
import { persistentMenuRoute } from "./persistent-menu.route";
import { CommonModule } from '@angular/common';
import { PersistentMenuService } from './persistent-menu.service';

const ENTITY_STATES = [
    ...persistentMenuRoute,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(ENTITY_STATES)
    ],
    declarations: [
        PersistentMenuComponent,
    ],
    entryComponents: [
        PersistentMenuComponent,
    ],
    providers: [
        PersistentMenuService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatbotPersistentMenuModule {}
