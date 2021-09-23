import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";
import { TvShowsComponent } from "./tv-shows/tv-shows.component";
import { PersonalListComponent } from "./personal-list/personal-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'personal-list', component: PersonalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
