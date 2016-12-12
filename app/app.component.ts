import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <!-- <h1>{{title}}</h1> -->
    <nav>
      
      <img src="content/logo.png" alt="Logo" />
      Suchfeld...
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a routerLink="/heroes" routerLinkActive="active">Filter (Dropdown)</a>
      <a routerLink="/home" routerLinkActive="active">Filme</a>
      <a routerLink="/music" routerLinkActive="active">Musik</a>
      <a routerLink="/books" routerLinkActive="active">Bücher</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes (debug)</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard (debug)</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'AngularDB';
  logo = 'content/logo.png';
}