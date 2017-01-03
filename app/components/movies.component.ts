import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './class/hero';
import { HeroService } from './service/hero.service';
import { Rest } from './service/rest';


@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: './views/movies.component.html',
  styleUrls: [ './views/styles/movies.component.css' ],
  providers:[Rest]
})
export class MoviesComponent{

	getData:string;

	constructor(private rest:Rest){
	}


 	getMovie() {
		this.rest.getMovie("fantomas", "").subscribe(
			data => this.getData = JSON.stringify(data.Title),
			error => console.log(error),
			()=>console.log('test ende')
		);
	}

 }