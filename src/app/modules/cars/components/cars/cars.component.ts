import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsService} from "../../services";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:ICar[];
  form:FormGroup;
  updatedCar:ICar | null;

  constructor(private carsService:CarsService) {
    this.createForm()
  }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(value => {
      this.cars = value})
  }

  createForm():void{
    this.form = new FormGroup({
      model:new FormControl('',[Validators.required,Validators.min(2),Validators.max(15)]),
      year:new FormControl('',[Validators.required,Validators.min(1990),Validators.max(new Date().getFullYear())]),
      price:new FormControl('',[Validators.required,Validators.min(1000)])
    })
  }

  saveCar():void {
    if (!this.updatedCar){
      this.carsService.createCar(this.form.value).subscribe(value => {
        this.cars.push(value);
        this.form.reset();
      })
    }
    else {
      this.carsService.updateCarByID(this.updatedCar.id, this.form.value).subscribe(value => {
        const updatedCar = this.cars.find(c => c.id === this.updatedCar?.id);
        Object.assign(updatedCar, value);
        this.updatedCar = null;
      })
    }
  }

  update(car:ICar):void {
    this.updatedCar = car;
    this.form.setValue({model:car.model,price:car.price,year:car.year})
  }

  deleteCar(id:number):void {
     this.carsService.deleteCar(id).subscribe(value => {
       const index = this.cars.findIndex(car => car.id === id);
       console.log(index)
       this.cars.splice(index,1)
     })
  }
}
