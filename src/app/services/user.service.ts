import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/user.interface";
import {IUserDetails} from "../interfaces/userDetails.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  };

  getUser(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this._url + '/' + id);
  };

}
