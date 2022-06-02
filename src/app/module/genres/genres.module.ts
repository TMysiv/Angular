import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { GenresRoutingModule } from './genres-routing.module';
import {GenresComponent} from "./components/genres/genres.component";
import {GenreComponent} from "./components/genre/genre.component";
import { GenreDetailsComponent } from './components/genre-details/genre-details.component';
import {GenreService} from "./services";


@NgModule({
  declarations: [GenresComponent,GenreComponent, GenreDetailsComponent],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule
  ],
  providers:[GenreService]
})
export class GenresModule { }
