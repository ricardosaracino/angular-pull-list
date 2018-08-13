import {Injectable} from '@angular/core';
import {interval} from 'rxjs/index';

import {Product} from '../models/Product';


@Injectable()
export class CartService {

  products: Array<Product> = new Array();

  cartTotal = 0;

  constructor() {

    this.refreshCart();

    // Refresh cart if we are using multiple tabs
    interval(1000)
      .subscribe(() => {
        this.refreshCart();
      });
  }


  private refreshCart(): void {
    const lsCart = localStorage.getItem('cartService.products');

    if (lsCart) {
      const cartData = JSON.parse(lsCart);

      this.products = cartData.products;

      this.cartTotal = cartData.cartTotal;
    }
  }


  public hasItems(): boolean {
    return this.products.length > 0;
  }


  public getCartTotal(): number {
    return this.products.reduce((a: number, p: Product) => {
      return a + p.customerPrice;
    }, 0);
  }


  public removeFromCart(product: Product): void {

    let found = false;

    this.products = this.products.filter((p: Product) => {

      if (found) {
        return true;
      }

      return !(found = (p.id === product.id));
    });

    this.cartTotal = this.getCartTotal();

    localStorage.setItem('cartService.products', JSON.stringify({products: this.products, cartTotal: this.cartTotal}));
  }


  public addToCart(product: Product): void {

    this.products.push(product);

    this.cartTotal = this.getCartTotal();

    this.products.sort((a: Product, b: Product) => {
      return a.name.localeCompare(b.name);
    });

    localStorage.setItem('cartService.products', JSON.stringify({products: this.products, cartTotal: this.cartTotal}));
  }
}
