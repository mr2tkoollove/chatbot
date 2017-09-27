import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { accountRoute } from './account.route';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';

const ENTITY_STATES = [
    ...accountRoute,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(ENTITY_STATES)
    ],
    declarations: [
        AccountComponent,
    ],
    entryComponents: [
      AccountComponent,
    ],
    providers: [
      AccountService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule {}
