import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service";
import { MoviesModel } from "./models/movies.model";


@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public displayMovies: MoviesModel[] = [];
  public IMG_API = 'https://image.tmdb.org/t/p/w1280';

  constructor( public movieService: MoviesService ) { }

  ngOnInit() {
    this.movieService.getMostPopularMovies()
      .subscribe((data) => {
        this.displayMovies = data.results;
        console.log(this.displayMovies)
      });
  }

}
