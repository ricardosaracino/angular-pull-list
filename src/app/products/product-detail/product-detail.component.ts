import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private service: ProductService) {
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.service.getProduct(id).subscribe(
      (product: Product) => {
        this.product = product;
      }
    );
  }
}
