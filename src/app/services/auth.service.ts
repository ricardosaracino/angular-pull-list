import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {interval, Observable, of, ReplaySubject, Subject} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {ApiResponse} from '../models/ApiResponse';
import {AuthUser} from '../models/AuthUser';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class AuthService {


  public redirectUrl = 'home'; // todo have this in config defaultUrl

  public readonly loginRoute = ['login']; // todo have this in config loginRoute

  public authUser: AuthUser;

  public isAuthenticated = false; // hasRoleUser

  public hasRoleAdmin = false; // hasRoleUser as well


  constructor(private http: HttpClient) {

    this.validate();

    // Refresh login if we are using multiple tabs
    interval(1000)
      .subscribe(() => {
        this.validate();
      });
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
          this.authUser = response.data.user;

          localStorage.setItem('authService.authUser', JSON.stringify(this.authUser));

          this.isAuthenticated = true;

          this.hasRoleAdmin = (this.authUser.roles.indexOf('ROLE_ADMIN') > -1);
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
   * @returns {Observable<boolean>}
   */
  public logout(): Observable<boolean> {

    return this.http.delete<boolean>(`${environment.apiUrl}/security/logout`).pipe(
      map((response: ApiResponse) => {

        if (response.status !== 'success') {
          return false;
        }

        this.invalidate();

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
  public validate(): void {
    const lsUser = localStorage.getItem('authService.authUser');

    if (lsUser) {
      if (lsUser !== JSON.stringify(this.authUser)) {
        this.authUser = JSON.parse(lsUser);
        this.isAuthenticated = true; // isUser
        this.hasRoleAdmin = (this.authUser.roles.indexOf('ROLE_ADMIN') > -1);
      }
    } else {
      if (this.authUser) {
        this.authUser = undefined;
        this.isAuthenticated = false;
      }
    }
  }

  /**
   *
   */
  public invalidate(): void {
    localStorage.removeItem('authService.authUser');
    this.isAuthenticated = false;
  }
}
