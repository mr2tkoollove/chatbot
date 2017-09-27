import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {viewDetailCartRoute} from "./view-detail-cart.route";
import {ViewDetailCartComponent} from "./view-detail-cart.component";
import {ViewDetailCartService} from "./view-detail-cart.service";

const ENTITY_STATES = [
  ...viewDetailCartRoute,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(ENTITY_STATES)
  ],
  declarations: [
    ViewDetailCartComponent
  ],
  entryComponents: [
    ViewDetailCartComponent
  ],
  providers: [
    ViewDetailCartService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewDetailCartModule {}
