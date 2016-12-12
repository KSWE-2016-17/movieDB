import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { MusicComponent }      from './music.component';
import { BooksComponent }      from './books.component';
import { MoviesComponent }      from './movies.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'home',       component: HomeComponent },
  { path: 'music',      component: MusicComponent },
  { path: 'books',      component: BooksComponent },
  { path: 'movies',      component: MoviesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}