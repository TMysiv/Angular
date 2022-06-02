import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getPopularMovies(page:number):Observable<any>{
    return this.http.get<any>(`${urls.popular}page=${page}`)
  }
}
