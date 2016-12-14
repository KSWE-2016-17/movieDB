"use strict";
/**
 * Created by eugen on 16.11.16.
 * changes by karstenAMF/oxanaZh
 */
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var RestService = (function () {
    function RestService(http) {
        this.http = http;
        this.authy = "";
        this.header = new http_1.Headers;
    }
    Object.defineProperty(RestService, "parameters", {
        get: function () {
            return [[http_1.Http]];
        },
        enumerable: true,
        configurable: true
    });
    RestService.prototype.authorizationHeader = function (token) {
        this.header.append('Authorization', token);
        this.authy = token;
    };
    RestService.prototype.getUserRating = function (user_id) {
        var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id) + '/ratings';
        var options = new http_2.RequestOptions({ headers: this.header });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    //Gibt bestimmten Benutzer wieder
    RestService.prototype.getUserSingle = function (user_id) {
        console.log("this header");
        console.log(this.header);
        // console.log(this.header.authorization);
        var url = 'https://tinytaskrest.herokuapp.com/users/' + encodeURI(user_id);
        var response;
        var options = new http_2.RequestOptions({ headers: this.header });
        /*this.http.get(url,options)
             .subscribe( data  => {console.log(data); response=data; return response},
                        error =>  {console.log("erorro"); return "anything";});*/
        //this.http.get(url,options)
        //.map(data => {return data;});
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=restService.js.map