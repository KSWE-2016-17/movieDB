import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './views/dashboard.component.html',
  styleUrls: [ './views/styles/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {


  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    
  }

}