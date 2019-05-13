import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  RouterState,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: AuthService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url = state.url;

    return this.checkIfLoggedIn(url);
  }

  checkIfLoggedIn(url: string) {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    // strore the attempted URL
    this.loginService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
}
