import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  public isAuthenticated = false;

  public login() {
    this.isAuthenticated = true;
  }

  public logout() {
    this.isAuthenticated = false;
  }
}
