import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'curso-performance-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showHideSidenav: boolean;

  constructor(public _location: Location) {
    this.showHideSidenav = true;
  }
}
