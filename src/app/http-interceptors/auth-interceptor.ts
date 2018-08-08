import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = request.clone({withCredentials: true});

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse | any) => {

        if (error.status === 401) {
          // session expired (or not logged in ?)
          console.log('Status 401 unauthorized');

          // clears local storage, redirects
          // this.authService.invalidate();

        } else if (error.status === 403) {
          console.log('Status 403 forbidden');
        }

        return throwError(error);
      })
    );
  }
}