import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './class/hero';
import { HeroService } from './service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: './views/home.component.html',
  styleUrls: [ './views/styles/home.component.css' ]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
}