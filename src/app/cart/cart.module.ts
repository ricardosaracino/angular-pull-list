import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppMaterialModule} from '../app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {CartComponent} from './cart/cart.component';
import {CartCheckOutComponent} from './cart-check-out/cart-check-out.component';

import {CartService} from './cart.service';
import {CartRoutingModule} from './cart-routing';


@NgModule({
  declarations: [
    CartComponent,
    CartCheckOutComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    AppMaterialModule,

    CartRoutingModule
  ],
  providers: [
    CartService,
  ],
})
export class CartModule {
}
