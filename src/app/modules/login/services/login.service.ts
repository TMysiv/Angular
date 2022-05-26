import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IUser} from "../../register/interfaces";
import {Observable, tap} from "rxjs";
import {IToken} from "../interfaces";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accessTokenKey = 'access'
  private refreshTokenKey = 'refresh'

  constructor(private http:HttpClient) { }

  login(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
    localStorage.setItem(this.refreshTokenKey, token.refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }

  refresh():Observable<IToken>{
    const refresh = this.getRefreshToken();
    return this.http.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens:IToken) =>{
        this.setToken(tokens)
      })
    )
  }
}
