import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rest } from './service/rest';
import { SearchService } from './service/searchservice';
import { Movie } from './class/movie';

@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: './views/movies.component.html',
  styleUrls: [ './views/styles/movies.component.css' ],
  providers: [ Movie ],
})
export class MoviesComponent {

	Title;Year;Rated;Released;Runtime;Genre;Director;Writer;Actors;Plot;Language;Country;Awards;
	Poster;imdbRating;imdbVotes;Type;

	constructor(private rest:Rest, private _searchService:SearchService, private movie:Movie){
		this._searchService.searchTextStream$.subscribe(
			text => {
				this.getMovie(text, "");
				console.log("Text empfangen");
			}
		)
	}


 	getMovie(name, year) {
		this.rest.getSingleMovie(name, year).subscribe(
			data => this.fillVariables(data),
			error => console.log(error),
			()=>console.log('test ende ' + name)
		);
	}

	fillVariables(data:any) {
		this.movie.Title = JSON.stringify((data).Title);
		this.movie.Year = JSON.stringify((data).Year);
		this.movie.Rated = JSON.stringify((data).Rated);
		this.movie.Runtime = JSON.stringify((data).Runtime);
		this.movie.Genre = JSON.stringify((data).Genre);
		this.movie.Director = JSON.stringify((data).Director);
		this.movie.Writer = JSON.stringify((data).Writer);
		this.movie.Actors = JSON.stringify((data).Actors);
		this.movie.Plot = JSON.stringify((data).Plot);
		this.movie.Language = JSON.stringify((data).Language);
		this.movie.Country = JSON.stringify((data).Country);
		this.movie.Awards = JSON.stringify((data).Awards);
		this.movie.Poster = JSON.stringify((data).Poster);
		this.movie.imdbRating = JSON.stringify((data).imdbRating);
		this.movie.imdbVotes = JSON.stringify((data).imdbVotes);
		this.movie.Type = JSON.stringify((data).Type);
	}
	
} 