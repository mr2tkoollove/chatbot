import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuService} from "./menu.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MenuService,
  ],
})
export class MenuModule { }
