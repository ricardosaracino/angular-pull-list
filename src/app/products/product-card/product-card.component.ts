import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Product} from '../../models/Product';
import {CartService} from '../../services/cart.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private cart: CartService, private message: MessageService, private router: Router) {
  }

  ngOnInit() {
  }

  public goProductDetails() {
    return this.router.navigate(['product', this.product.id]);
  }

  public addToCard($event) {
    $event.stopPropagation();
    this.message.sendToFlash('Cart Updated');
    return this.cart.addToCart(this.product);
  }
}
