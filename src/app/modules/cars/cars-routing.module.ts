import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarsComponent} from "./components/cars/cars.component";
import {CarsGuard} from "./guards/cars.guard";

const routes: Routes = [
  {path:'',component:CarsComponent,canActivate:[CarsGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
