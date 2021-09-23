import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";


import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieComponent } from './movies/movie.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { PersonalListComponent } from './personal-list/personal-list.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MovieComponent,
    TvShowsComponent,
    PersonalListComponent,
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
