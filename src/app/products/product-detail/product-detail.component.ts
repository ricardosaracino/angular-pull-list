import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Product} from '../../models/Product';
import {CartService} from '../../cart/cart.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  public disableAddToCart = false;

  constructor(private cart: CartService, private message: MessageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { product: Product }) => {
        this.product = data.product;
      });
  }

  public addToCart() {
    this.disableAddToCart = true;
    this.message.sendToFlash('Cart Updated');
    return this.cart.addToCart(this.product);
  }
}
