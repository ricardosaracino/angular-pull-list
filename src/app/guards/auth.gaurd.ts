import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  /**
   * @param route
   * @param state
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    return this.handleAuth(url, route.data);
  }

  /**
   * @param route
   * @param state
   */
  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  /**
   * @param route
   */
  public canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.handleAuth(url, route.data);
  }

  /**
   * @param url
   * @param data
   */
  private handleAuth(url: string, data): boolean {
    if (!this.authService.isAuthenticated) {

      this.authService.redirectUrl = url;

      this.router.navigate(this.authService.loginRoute);

      return false;
    }

    if (data.roles instanceof Array) {

      const res = this.authService.authUser.roles.filter(function (n) {
        return data.roles.indexOf(n) > -1;
      });

      return res.length !== 0;
    }

    return true;
  }
}
