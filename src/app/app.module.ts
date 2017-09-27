import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { StoreModule } from './entities/store/store.module';
import { AccountModule } from './entities/account/account.module';
import { CartModule } from './entities/cart/cart.module';
import { CartLineModule } from './entities/cart-line/cart-line.module';
import { PageModule } from './entities/page/page.module';
import { UserModule } from './entities/user/user.module';
import {HomeModule} from './home/home.module';
import {LayoutRoutingModule} from './layouts/layout-routing.module';
import {SidebarComponent} from "./layouts/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {PayloadModule} from "./entities/payload/payload.module";
import {MenuModule} from "./entities/menu/menu.module";
import {GuideModule} from "./guide/guide.module";
import { ViewDetailCartComponent } from './webview/view-detail-cart/view-detail-cart.component';
import { ViewDetailProductComponent } from './webview/view-detail-product/view-detail-product.component';
import {ViewDetailProductModule} from "./webview/view-detail-product/view-detail-product.module";
import {ViewDetailCartModule} from "./webview/view-detail-cart/view-detail-cart.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutRoutingModule,
    RouterModule,
    // user define below
    StoreModule,
    AccountModule,
    CartModule,
    CartLineModule,
    PageModule,
    UserModule,
    HomeModule,
    PayloadModule,
    MenuModule,
    GuideModule,
    ViewDetailProductModule,
    ViewDetailCartModule,
  ],
  providers: [
    AppService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
