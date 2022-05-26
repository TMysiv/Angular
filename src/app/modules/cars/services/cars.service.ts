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

  getCarById(id:string):Observable<ICar>{
    return this.http.get<ICar>(`${urls.cars}/${id}`)
  }

  createCar(car:ICar):Observable<ICar>{
    return this.http.post<ICar>(urls.cars,car)
  };

  deleteCar(id:number):Observable<void>{
    return this.http.delete<void>(`${urls.cars}/${id}`)
  }

  updateCarByID(id:number,car:Partial<ICar>):Observable<ICar>{
    return this.http.put<ICar>(`${urls.cars}/${id}`,car)
  }
}
