import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './components/dashboard.component';
import { MusicComponent }      from './components/music.component';
import { BooksComponent }      from './components/books.component';
import { MoviesComponent }      from './components/movies.component';
import { HomeComponent } from "./components/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'home',       component: HomeComponent },
  { path: 'music',      component: MusicComponent },
  { path: 'books',      component: BooksComponent },
  { path: 'movies',      component: MoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}