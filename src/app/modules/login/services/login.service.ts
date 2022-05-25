import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IUser} from "../../register/interfaces";
import {Observable} from "rxjs";
import {IToken} from "../interfaces";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accessTokenKey = 'access'

  constructor(private http:HttpClient) { }

  login(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}
