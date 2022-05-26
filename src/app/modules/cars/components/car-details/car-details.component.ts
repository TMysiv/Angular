import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car:Observable<ICar>

  constructor(private carsService:CarsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.car = this.carsService.getCarById(id)
    })
  }

}
