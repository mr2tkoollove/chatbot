import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {payloadRoute} from "./payload.route";
import {PayloadComponent} from "./payload.component";
import {PayLoadService} from "./payload.service";

const ENTITY_STATES = [
  ...payloadRoute,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(ENTITY_STATES)
  ],
  declarations: [
    PayloadComponent,
  ],
  entryComponents: [
    PayloadComponent,
  ],
  providers: [
    PayLoadService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PayloadModule {}
