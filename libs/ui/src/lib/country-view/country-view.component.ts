import { Component, Input } from '@angular/core';

import { Country } from '@typescript-common';

@Component({
  selector: 'curso-performance-angular-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss']
})
export class CountryViewComponent {
  @Input() public country!: Country;

}
