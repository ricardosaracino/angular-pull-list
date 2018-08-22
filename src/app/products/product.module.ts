import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppMaterialModule} from '../app-material.module';
import {ProductRoutingModule} from './product-routing';

import {ProductService} from './product.service';

import {ProductCardComponent} from './product-card/product-card.component';
import {ProductCardListComponent} from './product-card-list/product-card-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,
    AppMaterialModule,

    ProductRoutingModule
  ],
  declarations: [
    ProductCardComponent,
    ProductCardListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
  ],
})
export class ProductModule {
}
