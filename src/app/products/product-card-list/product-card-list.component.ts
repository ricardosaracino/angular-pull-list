import {Component, OnInit} from '@angular/core';

import {ProductService} from '../product.service';
import {ApiResponseData} from '../../models/ApiResponseData';
import {Product} from '../../models/Product';


@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {

  products: Array<Product> = [];

  pageCount = 4;

  nextOffset = 0;

  private processData = (data: ApiResponseData) => {

    // TODO some issues with mapping to ApiResponseData

    if ((data instanceof ApiResponseData || Object)) { // (data instanceof ApiResponseData) || TODO error returns []
      this.products = this.products.concat(data.results);
    }
  };

  constructor(private service: ProductService) {
    this.nextOffset = 0;
  }

  ngOnInit() {
    this.getArrivingNextWeek();
  }

  getArrivingNextWeek(): void {

    this.service.getArrivingNextWeek(this.nextOffset, this.pageCount).subscribe(this.processData);

    this.nextOffset = this.nextOffset +this.pageCount;
  }
}
