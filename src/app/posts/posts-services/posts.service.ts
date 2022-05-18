import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url)
  };

  getPost(id:string):Observable<IPost>{
    return this.http.get<IPost>(this._url + '/' + id)
  };

}
