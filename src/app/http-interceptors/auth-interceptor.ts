import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = request.clone({withCredentials: true});

    return next.handle(authReq)
      .pipe(
        catchError((error: HttpErrorResponse | any) => {

          if (error.status === 401) {

            // todo this could be all done at once
            this.authService.invalidate();

            // this.authService.redirectUrl = url;

            this.router.navigate(['unauthorized']);

          } else if (error.status === 403) {

            if (this.router.url !== '/login') {
              this.router.navigate(['forbidden']);
            }
          }

          return throwError(error);
        })
      );
  }
}
