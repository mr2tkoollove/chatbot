import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const LAYOUT_ROUTES = [
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES),
      RouterModule
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}
