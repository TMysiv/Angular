import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../module/movies/services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies:any;
  page:number = 1;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies(this.page).subscribe(value => {
      const {results} = value;
      this.popularMovies = results;
    })
  }

  nextPage() {
    const id = ++this.page;
    this.movieService.getPopularMovies(id).subscribe(value => {
      const {results} = value
      this.popularMovies = results;
    })
  }

  previousPage() {
    const id = --this.page;
    this.movieService.getPopularMovies(id).subscribe(value => {
      const {results} = value
      this.popularMovies = results;
    })
  }
}
