import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isAuthenticated = false;

  public login(): boolean {
    this.isAuthenticated = true;
  }

  public logout(): boolean {
    this.isAuthenticated = false;
  }
}
