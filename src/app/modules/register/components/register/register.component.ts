import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

import {RegisterService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  userError:string;

  constructor(private registerService:RegisterService,private router:Router) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm():void{
    this.form = new FormGroup({
      username: new FormControl(null,
        [Validators.required,Validators.min(2),Validators.max(20)]),
      password: new FormControl('',
        [Validators.required,Validators.min(2),Validators.max(20)]),
      confirmPassword: new FormControl('',
        [Validators.required,Validators.min(2),Validators.max(20)])
    },[this.checkPassword])
  }

  register():void{
    const user = this.form.value;
    delete user.confirmPassword;
    this.registerService.register(user).subscribe({
      next: () => { this.router.navigate(['login']) },
      error: e =>{ this.userError = e.error.username[0]}
      }
    )
  }

  checkPassword(form:AbstractControl):ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame:'not same passwords'}
  }

}
