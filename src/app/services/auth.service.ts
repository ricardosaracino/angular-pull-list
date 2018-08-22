import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {ApiResponse} from '../models/ApiResponse';
import {AuthUser} from '../models/AuthUser';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class AuthService {

  public isAuthenticated = false;

  public user: AuthUser;

  constructor(private http: HttpClient) {

    const jsonUser = localStorage.getItem('authService.user');

    if (jsonUser) {
      this.user = JSON.parse(jsonUser);

      this.isAuthenticated = true;
    }
  }

  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<boolean>}
   */
  public login(username: string, password: string): Observable<boolean> {

    const body = {'username': username, 'password': password};

    return this.http.post<boolean>(`${environment.apiUrl}/security/login`, body, {headers: headers}).pipe(
      map((response: ApiResponse) => {

        if (response.status !== 'success') {
          return false;
        }

        if (response.data.user) {
          this.user = response.data.user;

          localStorage.setItem('authService.user', JSON.stringify(this.user));

          this.isAuthenticated = true;
        }

        return true;
      }),
      catchError(err => {
        return of(undefined);
      })
    );
  }

  /**
   *
   */
  public logout() {
    this.isAuthenticated = false;
  }
}
