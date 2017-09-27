import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {viewDetailProductRoute} from "./view-detail-product.route";
import {ViewDetailProductComponent} from "./view-detail-product.component";
import {ViewDetailProductService} from "./view-detail-product.service";

const ENTITY_STATES = [
  ...viewDetailProductRoute,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(ENTITY_STATES)
  ],
  declarations: [
    ViewDetailProductComponent
  ],
  entryComponents: [
    ViewDetailProductComponent
  ],
  providers: [
    ViewDetailProductService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewDetailProductModule {}
