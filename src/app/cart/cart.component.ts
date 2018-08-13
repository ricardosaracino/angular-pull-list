import {Component, OnInit} from '@angular/core'

import {CartService} from '../services/cart.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['remove', 'name', 'customerPrice'];

  constructor(private cart: CartService) {
  }

  ngOnInit() {
  }

  public hasItems(): boolean {
    return this.cart.hasItems();
  }

  public removeProduct(product: Product) {
    this.cart.removeFromCart(product);
  }

  public getProducts(): Array<Product> {
    return this.cart.products;
  }

  public getCustomerTotal(): number {
    return this.cart.cartTotal;
  }
}
