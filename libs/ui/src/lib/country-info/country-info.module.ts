import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { CountryInfoComponent } from './country-info.component';

@NgModule({
  declarations: [CountryInfoComponent],
  imports: [CommonModule, MatTableModule, MatSortModule],
  exports: [CountryInfoComponent],
})
export class CountryInfoModule {}
