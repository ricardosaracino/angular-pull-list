import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/index';

@Injectable()
export class LoaderService {

  loading$: Observable<boolean> = new Observable();

  private count = 0;

  constructor() {
    this.loading$ = false;
  }

  start() {
    console.log('start', this.count);
    this.count++;
    this.loading$ = this.count > 0;
    console.log('start post', this.count);
  }

  complete() {
    console.log('complete', this.count);
    this.count--;
    this.loading$ = this.count > 0;
    console.log('complete post', this.count);
  }
}
