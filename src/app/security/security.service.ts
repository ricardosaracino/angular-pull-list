import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {catchError, map} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs/index';

import {MessageService} from '../services/message.service';
import {ApiResponse} from '../models/ApiResponse';


@Injectable()
export class SecurityService {

  private baseUrl = 'http://localhost/index.php/api';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  public postSignup(email: string): Observable<any> {

    return this.http.post<any>(`${this.baseUrl}/security/signup`, {'email': email}).pipe(
      map((response: ApiResponse) => {
        if (response.data && response.data.results && response.data.results instanceof Array) {
          return response.data.results.shift();
        }
      }),
      catchError(this.handleError(`Signup ${email}`, []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.messageService.sendToFlash(`Error ${operation}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
