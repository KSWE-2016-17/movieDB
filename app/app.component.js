"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'AngularDB';
        this.logo = 'content/logo.png';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        template: "\n    <!-- <h1>{{title}}</h1> -->\n    <nav>\n      \n      <a routerLink=\"/home\" routerLinkActive=\"active\"><img src=\"content/logo.png\" alt=\"Logo / Home\" /></a>\n      Suchfeld...\n      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Filter (Dropdown)</a>\n      <a routerLink=\"/movies\" routerLinkActive=\"active\">Filme</a>\n      <a routerLink=\"/music\" routerLinkActive=\"active\">Musik</a>\n      <a routerLink=\"/books\" routerLinkActive=\"active\">B\u00FCcher</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes (debug)</a>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard (debug)</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['app.component.css'],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map