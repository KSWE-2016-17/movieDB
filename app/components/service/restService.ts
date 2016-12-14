/**
 * Created by eugen on 16.11.16.
 * changes by karstenAMF/oxanaZh
 */
import {Http, Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

export class RestService {
  static get parameters() {
    return [[Http]];
  }

  private header: Headers;
  private authy = "";

  constructor(private http:Http) {
    this.header = new Headers;
  }

  authorizationHeader(token: any){
    this.header.append('Authorization', token);
	this.authy = token;
}

 getUserRating(user_id:any) {
    let url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id)+'/ratings';
	let options = new RequestOptions({ headers: this.header });
	return this.http.get(url,options).map(res => res.json());
  }

  //Gibt bestimmten Benutzer wieder
  getUserSingle(user_id:any){
	  console.log("this header");
	  console.log(this.header);
	 // console.log(this.header.authorization);
    var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id);
	let response:any;
	let options = new RequestOptions({ headers: this.header });
	/*this.http.get(url,options)
		 .subscribe( data  => {console.log(data); response=data; return response},
					error =>  {console.log("erorro"); return "anything";});*/
	//this.http.get(url,options)
	//.map(data => {return data;});
	return this.http.get(url,options).map(res => res.json());

}
}