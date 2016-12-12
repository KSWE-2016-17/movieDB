import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: 'movies.component.html',
  styleUrls: [ 'movies.component.css' ]
})
export class MoviesComponent implements OnInit {

  ngOnInit(): void {
  }
}