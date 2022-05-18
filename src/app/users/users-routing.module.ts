import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UsersDetailsComponent} from "./users-components/users-details/users-details.component";

const routes: Routes = [
  {path:'', component:UsersComponent, children:[
      {path:':id',component:UsersDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
