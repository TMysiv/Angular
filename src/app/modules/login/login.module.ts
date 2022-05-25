import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from "./services";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  providers:[LoginService]
})
export class LoginModule { }
