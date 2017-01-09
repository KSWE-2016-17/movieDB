import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rest } from './service/rest';
import { SearchService } from './service/searchservice';

@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: './views/movies.component.html',
  styleUrls: [ './views/styles/movies.component.css' ],
})
export class MoviesComponent {

	getData;

	constructor(private rest:Rest, private _searchService:SearchService){
		this._searchService.searchTextStream$.subscribe(
			text => {
				this.getMovies(text, "");
				console.log("Text empfangen");
			}
		)
	}


 	getMovies(name, year) {
		this.rest.getMovies(name, year).subscribe(
			data => this.getData = JSON.stringify(data),
			error => console.log(error),
			()=>console.log('test ende ' + name)
		);
	}

 }