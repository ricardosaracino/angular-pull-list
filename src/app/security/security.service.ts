import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs/index';

import {MessageService} from '../services/message.service';
import {ApiResponse} from '../models/ApiResponse';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class SecurityService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }


  public postEmailVerification(token: string): Observable<any> {

    const body = {'emailVerificationToken': token};

    return this.http.post<any>(`${environment.apiUrl}/security/verify_email`, body, {headers: headers}).pipe(
      map((response: ApiResponse) => {
        if (response.data && response.data.results && response.data.results instanceof Array) {
          return response.data.results.shift();
        }
      }),
      catchError(this.handleError(`Email Verification`, []))
    );
  }


  public postSignup(email: string): Observable<any> {

    const body = {'email': email, 'redirectUrl': `${location.origin}/email-verification`};

    return this.http.post<any>(`${environment.apiUrl}/security/signup`, body, {headers: headers}).pipe(
      map((response: ApiResponse) => {
        if (response.data && response.data.results && response.data.results instanceof Array) {
          return response.data.results.shift();
        }
      }),
      catchError(this.handleError(`Signup`, []))
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
