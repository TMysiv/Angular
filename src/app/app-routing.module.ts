import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path:'register',loadChildren:() => import('./modules/register/register.module').then(m =>m.RegisterModule)},
  {path:'login',loadChildren:() => import('./modules/login/login.module').then(m =>m.LoginModule)},
  {path:'cars',loadChildren:() => import('./modules/cars/cars.module').then(m =>m.CarsModule)},
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule {

}
