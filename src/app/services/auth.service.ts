import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {MessageService} from '../services/message.service';
import {ApiResponse} from '../models/ApiResponse';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

class AuthUser {
}

@Injectable()
export class AuthService {

  public isAuthenticated = false;


  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }


  public login(username: string, password: string): Observable<boolean> {

    const body = {'username': username, 'password': password};

    return this.http.post<boolean>(`${environment.apiUrl}/security/login`, body, {headers: headers}).pipe(
      map((response: ApiResponse) => {


        // TODO grab token

        return this.isAuthenticated = (response.status === 'success');
      }),
      catchError(this.handleError(`Login`, []))
    );
  }

  public logout() {
    this.isAuthenticated = false;
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

      this.messageService.sendToFlash(`Error ${operation}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
