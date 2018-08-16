import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './security/login/login.component';
import {SignupComponent} from './security/signup/signup.component';
import {EmailVerificationComponent} from './security/email-verification/email-verification.component';

import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

import {CartComponent} from './cart/cart/cart.component';
import {CartCheckOutComponent} from './cart/cart-check-out/cart-check-out.component';

const routes: Routes = [

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
