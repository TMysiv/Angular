import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import {CarsService} from "./services";
import {MainInterceptor} from "../../main.interceptor";
import { CarDetailsComponent } from './components/car-details/car-details.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[CarsService,
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:MainInterceptor
    }]
})
export class CarsModule { }
