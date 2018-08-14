import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';
import {CartModule} from './cart/cart.module';
import {ProductModule} from './products/product.module';

import {SnackBarComponent} from './shared/snack-bar/snack-bar.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {ProgressBarComponent} from './shared/progress-bar/progress-bar.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {LoginComponent} from './shared/login/login.component';

import {AuthService} from './services/auth.service';
import {CartService} from './cart/cart.service';
import {LoaderService} from './services/loader.service';
import {LoggerService} from './services/logger.service';
import {MessageService} from './services/message.service';

import {httpInterceptorProviders} from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SnackBarComponent,
    PageNotFoundComponent,
    ProgressBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    FlexLayoutModule,
    AppMaterialModule,

    ProductModule, // Order Matters for routing
    CartModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    CartService,
    LoaderService,
    LoggerService,
    MessageService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
