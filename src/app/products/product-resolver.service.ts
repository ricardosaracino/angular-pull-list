import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {ProductService} from './product.service';
import {Product} from '../models/Product';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private service: ProductService, private router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get('id');

    return this.service.getProduct(id).pipe(
      take(1),
      map(product => {

        if (!product) {
          this.router.navigate(['/']); // TODO
        }

        return product; // to do should be Product or false
      })
    );
  }
}
