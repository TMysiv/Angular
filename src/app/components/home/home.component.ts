import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../module/movies/services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies:any

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(value => {
      const {results} = value;
      this.popularMovies = results;
      console.log(this.popularMovies)
    })
  }

}
