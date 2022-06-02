import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {MovieService} from "./services";
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    MovieComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MovieComponent
  ],
  providers: [MovieService]
})
export class MoviesModule { }
