import { Component, OnInit } from '@angular/core';
import { TvShowsModel } from "./models/tv-shows.model";
import { TvShowsService } from "./tv-shows.service";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  public displayTvShows: TvShowsModel[] = [];
  public IMG_API = 'https://image.tmdb.org/t/p/w1280';

  constructor( public tvShowsService: TvShowsService ) { }

  ngOnInit() {
    this.tvShowsService.getMostPopularTvShows()
      .subscribe((data) => {
        this.displayTvShows = data.results;
        console.log(this.displayTvShows)
      });
  }

}
