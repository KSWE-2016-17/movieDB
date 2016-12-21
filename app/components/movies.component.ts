import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './class/hero';
import { HeroService } from './service/hero.service';
import { Rest } from './service/rest';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import {Movie} from "./class/movie";

@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: './views/movies.component.html',
  styleUrls: [ './views/styles/movies.component.css' ],
  providers: [Rest,AUTH_PROVIDERS]
})
export class MoviesComponent implements OnInit {

	constructor(private rest:Rest, private movie:Movie) {
		this.getMovie();
	}

  ngOnInit(): void {
  }

  getMovie() {
	this.rest.getMovie("", "").subscribe((data:any) =>{this.fillMovie(data);});
 }

 fillMovie(data:any){
	this.movie.title = data.error;
 }
}