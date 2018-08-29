import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {ApiResponse} from '../models/ApiResponse';
import {ApiResponseData} from '../models/ApiResponseData';
import {Company} from '../models/Company';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});


@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {
  }

  /**
   * @returns {Observable<ApiResponseData>}
   */
  public getCompanies(): Observable<ApiResponseData> {

    return this.http.get<ApiResponseData>(`${environment.apiUrl}/admin/companies`).pipe(
      map((response: ApiResponse) => {
        if (response.data) {
          return response.data;
        }
      }),
      catchError(err => {
        return of(undefined);
      })
    );
  }

  /**
   *
   * @param {Company} company
   * @returns {Observable<boolean>}
   */
  public saveCompany(company: Company): Observable<boolean> {

    return this.http.post<boolean>(`${environment.apiUrl}/admin/companies`, {company: company}, {headers: headers}).pipe(
      map((response: ApiResponse) => {

        return response.status === 'success';
      }),
      catchError(err => {
        return of(undefined);
      })
    );
  }
}
