import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../interfaces";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }

  getAllCars():Observable<ICar[]>{
    return this.http.get<ICar[]>(urls.cars)
  }
}
