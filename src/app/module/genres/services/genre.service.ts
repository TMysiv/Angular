import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenre} from "../interfaces";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getAllGenres():Observable<any>{
    return this.http.get<any>(urls.genre)
  }
}
