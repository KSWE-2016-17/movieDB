/**
 * Created by eugen on 21.12.16.
 */
import {Http, Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import any = jasmine.any;

export class Rest {
    static get parameters() {
        return [{Http}];
    }

    constructor(private http:Http){
    }

    getMovie(movie_name: any, movie_date: any){
    let url= 'http://www.omdbapi.com/?t=' + encodeURI(movie_name) + '?y=' + encodeURI(movie_date) + '&plot=short&r=jason';
    let response: any;
    return this.http.get(url).map(res => res.json());
}
}

