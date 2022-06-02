import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'genres',loadChildren: () => import('../app/module/genres/genres.module').then(m => m.GenresModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
