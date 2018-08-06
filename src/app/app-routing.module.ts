import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {ProductCardListComponent} from './products/product-card-list/product-card-list.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';

/*import {AuthenticationGuard} from './gaurds/authentication.gaurd';
import {LoginComponent} from './components/login/login.component';
*/

/*import {LoginComponent} from './components/login/login.component';*/


const routes: Routes = [
  /* {path: 'login', component: LoginComponent},
   {path: 'logout', component: LoginComponent},
   {path: '', component: HeroesComponent, canActivate: [AuthenticationGuard]},
   {path: 'heroes', component: HeroesComponent, canActivate: [AuthenticationGuard]},
   {path: 'hero-detail/:id', component: HeroDetailComponent, canActivate: [AuthenticationGuard], data: {roles: ['admin']}},
   {path: 'hero-create', component: HeroCreateComponent, canActivate: [AuthenticationGuard], data: {roles: ['admin']}}*/

  {path: 'new-last-week', component: ProductCardListComponent},
  {path: 'arriving-this-week', component: ProductCardListComponent},
  {path: 'coming-next-week', component: ProductCardListComponent},

  {path: 'product/:id', component: ProductDetailComponent},

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
