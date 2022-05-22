import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolver, UsersResolver} from "./sevices/resolvers";
import {UsersGuard} from "./sevices/guards";

const routes: Routes = [
  {path:'',component:UsersComponent,
    resolve:{usersData:UsersResolver},
    canActivate:[UsersGuard],
    canDeactivate:[UsersGuard],

    children:[
      {path:':id',component:UserDetailsComponent,
        resolve:{userData:UserResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
