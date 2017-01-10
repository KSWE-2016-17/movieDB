/**
 * Created by eugen on 21.12.16.
 */
import {Http, Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class Rest {

    constructor(private http:Http){
    }

    getSingleMovie(movie_name: any, movie_year: any){
    	var url= 'http://www.omdbapi.com/?t=' + encodeURI(movie_name) + '&y=' + encodeURI(movie_year) + '&plot=full&r=json';
    	var response = this.http.get(url).map(res => res.json());
    	return response;
    }

     getMovies(movie_name: any, movie_year:any){
    	var url= 'http://www.omdbapi.com/?s=' + encodeURI(movie_name) + '&y=' + encodeURI(movie_year) + '&r=json';
	var response = this.http.get(url).map(res => res.json());
	return response;
     }
}

