import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';


import {SnackBarComponent} from './shared/snack-bar/snack-bar.component';

import {LoggerService} from './services/logger.service';
import {MessageService} from './services/message.service';
import {ProductService} from './services/product.service';

import {httpInterceptorProviders} from './http-interceptors/index';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {ProductNavComponent} from './products/product-nav/product-nav.component';
import {ProductCardComponent} from './products/product-card/product-card.component';
import {ProductCardListComponent} from './products/product-card-list/product-card-list.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SnackBarComponent,
    PageNotFoundComponent,
    ProductNavComponent,
    ProductCardComponent,
    ProductCardListComponent,
    ProductDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [
    LoggerService,
    MessageService,
    ProductService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
