import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './class/hero';
import { HeroService } from './service/hero.service';
import { Rest } from './service/rest';
import { SearchService } from './service/searchservice';

@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: './views/movies.component.html',
  styleUrls: [ './views/styles/movies.component.css' ],
  //providers:[Rest]
})
export class MoviesComponent implements OnInit{

	@Input() getData;

	constructor(private rest:Rest, private _searchService:SearchService){
		this._searchService.searchTextStream$.subscribe(
			text => {
				this.getMovie(text, "");
				console.log("Text empfangen");
			}
		)
	}


 	getMovie(name, year) {
		this.rest.getMovie(name, year).subscribe(
			data => this.getData = JSON.stringify(data.Title),
			error => console.log(error),
			()=>console.log('test ende ' + name)
		);
	}


	ngOnInit() {}

 }