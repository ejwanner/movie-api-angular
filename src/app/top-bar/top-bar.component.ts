import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MoviesService} from "../movies/movies.service";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  searchField: any;

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.searchField = new FormControl();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public searchMovie() {
    const test = this.searchField?.value;
    console.log(test)
    alert("Hallo")
    this.searchField.reset();
  }

}
