import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import { UserComponent } from './users-components/user/user.component';
import {UsersService} from "./users-services/users.service";
import { UsersDetailsComponent } from './users-components/users-details/users-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[UsersService]
})
export class UsersModule { }
