import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movies/movie.component";
import { SeriesComponent } from "./series/series.component";
import { PersonalListComponent } from "./personal-list/personal-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'personal-list', component: PersonalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
