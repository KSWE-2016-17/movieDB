import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard.component';
import { HomeComponent }        from './components/home.component';
import { MusicComponent }        from './components/music.component';
import { BooksComponent }        from './components/books.component';
import { MoviesComponent }        from './components/movies.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroService }          from './components/service/hero.service';
import { Rest }          from './components/service/rest';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
      MusicComponent,
    BooksComponent,
    MoviesComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService, Rest, AUTH_PROVIDERS ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/