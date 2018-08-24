import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';
import {SecurityModule} from './security/security.module';
import {CartModule} from './cart/cart.module';
import {ProductModule} from './products/product.module';
import {AdminModule} from './admin/admin.module';

import {SnackBarComponent} from './shared/snack-bar/snack-bar.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {ProgressBarComponent} from './shared/progress-bar/progress-bar.component';

import {UnauthorizedComponent} from './error-docs/unauthorized/unauthorized.component';
import {ForbiddenComponent} from './error-docs/forbidden/forbidden.component';
import {NotFoundComponent} from './error-docs/not-found/not-found.component';

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
    ProgressBarComponent,
    ForbiddenComponent,
    UnauthorizedComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    AppMaterialModule,

    SecurityModule, // Order Matters for routing
    ProductModule,
    CartModule,
    AdminModule,
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
