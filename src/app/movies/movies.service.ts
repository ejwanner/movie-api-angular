import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private api_key = 'api_key=e39ef1585c8baecdad456db684bae074';
  constructor(private http: HttpClient) { }

  getMostPopularMovies(): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${this.api_key}`);
  }

  searchMovie(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?&${this.api_key}`);
  }
}

