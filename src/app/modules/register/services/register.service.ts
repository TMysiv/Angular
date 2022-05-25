import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(user:IUser):Observable<IUser> {
    return this.http.post<IUser>(urls.users,user)
  }
}
