import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { userRoute } from './user.route';
import { UserService } from './user.service';

const ENTITY_STATES = [
    ...userRoute,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(ENTITY_STATES)
    ],
    declarations: [
        UserComponent,
    ],
    entryComponents: [
      UserComponent,
    ],
    providers: [
      UserService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
