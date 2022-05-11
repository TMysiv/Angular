import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
