import { Component, Input, OnChanges} from '@angular/core';

import { SearchService } from './components/service/searchservice';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <!-- <h1>{{title}}</h1> -->
    <nav>
      
      <a routerLink="/home" routerLinkActive="active"><img src="content/logo.png" alt="Logo / Home" /></a>
      <input type="text" [(ngModel)]="suche" (ngModelChange)="load()" ng-model-options="{ debounce: 800 }" placeholder="Search movie" />
      <a routerLink="/heroes" routerLinkActive="active">Filter (Dropdown)</a>
      <a routerLink="/movies" routerLinkActive="active">Filme</a>
      <a routerLink="/music" routerLinkActive="active">Musik</a>
      <a routerLink="/books" routerLinkActive="active">Bücher</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./components/views/styles/app.component.css'],
  //providers: [MoviesComponent]
})
export class AppComponent implements OnChanges {

  @Input() suche;

  constructor(private _searchService:SearchService)   {}

  load() {
	this._searchService.broadcastTextChange(this.suche);
	console.log("change detected " + this.suche);
  }

  ngOnChanges() {
}

  title = 'AngularDB';
  logo = 'content/logo.png';
}