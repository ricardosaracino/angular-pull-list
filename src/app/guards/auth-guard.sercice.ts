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
  private handleAuth(url: string, data): boolean {
    if (!this.authService.isAuthenticated) {

      // todo this could be all done at once
      this.authService.redirectUrl = url;

      this.router.navigate(this.authService.loginRoute);

      return false;
    }

    return true;
  }
}
