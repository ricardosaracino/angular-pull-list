import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './shared/login/login.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

import {CartComponent} from './cart/cart/cart.component';
import {CartCheckOutComponent} from './cart/cart-check-out/cart-check-out.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'checkout', component: CartCheckOutComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false} // <-- debugging purposes only
  )],
})

export class AppRoutingModule {
}
