import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarsComponent} from "./components/cars/cars.component";
import {CarsGuard} from "./guards";
import {CarDetailsComponent} from "./components/car-details/car-details.component";

const routes: Routes = [
  {path:'',component:CarsComponent,canActivate:[CarsGuard],
    children:[
      {path:':id',component:CarDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
