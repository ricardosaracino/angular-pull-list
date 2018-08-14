import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CartComponent} from './cart/cart.component';
import {CartCheckOutComponent} from './cart-check-out/cart-check-out.component';

const productRoutes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CartCheckOutComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule {
}

