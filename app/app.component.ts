import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <!-- <h1>{{title}}</h1> -->
    <nav>
      
      <a routerLink="/home" routerLinkActive="active"><img src="content/logo.png" alt="Logo / Home" /></a>
      Suchfeld...
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a routerLink="/heroes" routerLinkActive="active">Filter (Dropdown)</a>
      <a routerLink="/movies" routerLinkActive="active">Filme</a>
      <a routerLink="/music" routerLinkActive="active">Musik</a>
      <a routerLink="/books" routerLinkActive="active">Bücher</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes (debug)</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard (debug)</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./components/views/styles/app.component.css'],
})
export class AppComponent {
  title = 'AngularDB';
  logo = 'content/logo.png';
}