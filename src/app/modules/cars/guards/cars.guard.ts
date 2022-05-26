import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

import {LoginService} from "../../login/services";

@Injectable({
  providedIn: 'root'
})
export class CarsGuard implements CanActivate {

  constructor(private loginService:LoginService, private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.loginService.isAuthorization()){
      this.router.navigate(['login'])
      return false
    }
    else {
      return true
    }
  }

}
