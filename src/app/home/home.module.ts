import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HOME_ROUTE} from './home.route';
import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
      RouterModule.forRoot([HOME_ROUTE]),
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
    declarations: [
        HomeComponent,
        DashboardComponent,
        LoginComponent,
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
