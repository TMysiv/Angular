import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "./interfaces/user.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UService {

  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getAll():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url)
  }
}
