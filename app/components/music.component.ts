import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './class/hero';
import { HeroService } from './service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-music',
  templateUrl: './views/music.component.html',
  styleUrls: [ './views/styles/music.component.css' ]
})
export class MusicComponent implements OnInit {

  ngOnInit(): void {
  }
}