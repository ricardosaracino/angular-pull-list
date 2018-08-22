import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {MessageService} from '../services/message.service';
import {ApiResponse} from '../models/ApiResponse';
import {ApiResponseData} from '../models/ApiResponseData';
import {Product} from '../models/Product';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});


@Injectable()
export class ProductService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
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
      catchError(this.handleError(`Getting Product ${id}`, []))
    );
  }

  /**
   *
   * @param {number} offset
   * @param {number} limit
   * @returns {Observable<ApiResponseData>}
   */
  public getArrivingNextWeek(offset: number, limit: number): Observable<ApiResponseData> {

    const today = new Date();

    const nextweek_formatted = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).toISOString().substring(0, 10);
    const today_formatted = today.toISOString().substring(0, 10);

    const params = new HttpParams()
    // .set('dateRange', `${today_formatted},${nextweek_formatted}`) // 2013-01-01,2013-01-02
      .set('offset', `${offset}`)
      .set('limit', `${limit}`);

    return this.http.get<ApiResponseData>(`${environment.apiUrl}/products/`).pipe(
      map((response: ApiResponse) => {

        return response.data;
      }),
      catchError(this.handleError(`Getting Arriving Next Week`, []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<boolean> => {

      this.messageService.sendToFlash(`Error ${operation}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);

      return of(undefined);
    };
  }
}
