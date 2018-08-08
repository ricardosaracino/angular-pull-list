import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from './products/product.module';

import {SnackBarComponent} from './shared/snack-bar/snack-bar.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {ProductNavComponent} from './products/product-nav/product-nav.component';

import {LoggerService} from './services/logger.service';
import {MessageService} from './services/message.service';

import {httpInterceptorProviders} from './http-interceptors/index';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductNavComponent,
    SnackBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    FlexLayoutModule,
    AppMaterialModule,

    ProductModule, // Order Matters for routing
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    MessageService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
