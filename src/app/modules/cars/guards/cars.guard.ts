import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {LoginService} from "../../login/services";

@Injectable({
  providedIn: 'root'
})
export class CarsGuard implements CanActivate {

  constructor(private loginService:LoginService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.loginService.isAuthorization()){
      return false
    }
    else {
      return true
    }
  }

}
