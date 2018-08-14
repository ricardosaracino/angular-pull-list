import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppMaterialModule} from '../app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ProductCardComponent} from './product-card/product-card.component';
import {ProductCardListComponent} from './product-card-list/product-card-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

import {ProductService} from './product.service';
import {ProductRoutingModule} from './product-routing';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    AppMaterialModule,

    ProductRoutingModule
  ],
  providers: [
    ProductService,
  ],
})
export class ProductModule {
}
