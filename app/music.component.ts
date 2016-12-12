import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-music',
  templateUrl: 'music.component.html',
  styleUrls: [ 'music.component.css' ]
})
export class MusicComponent implements OnInit {

  ngOnInit(): void {
  }
}