import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isAuthenticated = false;

  public login() {
    this.isAuthenticated = true;
  }

  public logout() {
    this.isAuthenticated = false;
  }
}
