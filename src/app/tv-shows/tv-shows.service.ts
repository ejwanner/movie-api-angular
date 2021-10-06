import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private api_key = 'api_key=e39ef1585c8baecdad456db684bae074';
  constructor(private http: HttpClient) { }

  getMostPopularTvShows(): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&${this.api_key}`);
  }
}
