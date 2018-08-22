import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {ApiResponse} from '../models/ApiResponse';
import {ApiResponseData} from '../models/ApiResponseData';
import {Product} from '../models/Product';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  /**
   * @param {number | string} id
   * @returns {Observable<Product>}
   */
  public getProduct(id: number | string): Observable<Product> {

    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`).pipe(
      map((response: ApiResponse) => {
        if (response.data && response.data.results && response.data.results instanceof Array) {

          if (response.data.results.length !== 0) {
            return response.data.results.shift();
          }
        }
      }),
      catchError(err => {
        return of(undefined);
      })
    );
  }

  /**
   * @param {number} offset
   * @param {number} limit
   * @returns {Observable<ApiResponseData>}
   */
  public getArrivingNextWeek(offset: number, limit: number): Observable<ApiResponseData> {

    const params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `${limit}`);

    return this.http.get<ApiResponseData>(`${environment.apiUrl}/products/`).pipe(
      map((response: ApiResponse) => {

        return response.data;
      }),
      catchError(err => {
        return of(undefined);
      })
    );
  }
}
