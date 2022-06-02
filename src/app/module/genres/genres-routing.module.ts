import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GenresComponent} from "./components/genres/genres.component";
import {GenreDetailsComponent} from "./components/genre-details/genre-details.component";

const routes: Routes = [
  {
    path: '', component: GenresComponent, children: [
      {path: ':name', component: GenreDetailsComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
