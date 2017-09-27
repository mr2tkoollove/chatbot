import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { cartRoute } from './cart.route';
import { CartService } from './cart.service';

const ENTITY_STATES = [
    ...cartRoute,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(ENTITY_STATES)
    ],
    declarations: [
        CartComponent,
    ],
    entryComponents: [
      CartComponent,
    ],
    providers: [
      CartService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule {}
