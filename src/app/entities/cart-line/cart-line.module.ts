import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { cartLineRoute } from './cart-line.route';
import { CartLineComponent } from './cart-line.component';
import { CartLineService } from './cart-line.service';

const ENTITY_STATES = [
  ...cartLineRoute,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(ENTITY_STATES)
  ],
  declarations: [
    CartLineComponent,
  ],
  entryComponents: [
    CartLineComponent,
  ],
  providers: [
    CartLineService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartLineModule { }
