import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductCardListComponent} from './product-card-list/product-card-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductResolver} from './product-resolver.service';

const productRoutes: Routes = [

  {path: 'new-last-week', component: ProductCardListComponent},
  {path: 'arriving-this-week', component: ProductCardListComponent},
  {path: 'coming-next-week', component: ProductCardListComponent},
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolver
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProductResolver
  ]
})
export class ProductRoutingModule {
}

