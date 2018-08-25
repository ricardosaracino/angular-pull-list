import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot
} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private readonly authService: AuthService) {
  }

  /**
   * @param route
   * @param state
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.handleAuth(state.url, route.data);
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
    return this.handleAuth(`/${route.path}`, route.data);
  }

  /**
   * @param url
   * @param data
   */
  private handleAuth(url: string, data: any): boolean {

    if (data.role instanceof Array && this.authService.authUser) {

      return this.authService.authUser.roles.filter(function (n) {
        return data.role.indexOf(n) > -1;
      }).length !== 0;
    }

    if (data.role && this.authService.authUser) {
      return this.authService.authUser.roles.indexOf(data.role) > -1;
    }

    return false;
  }
}
