import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryViewModule, MainInfoContentModule } from '@ui';
import { CountryService } from '@data';

@NgModule({
  declarations: [CountryComponent],
  providers: [CountryService],
  imports: [CommonModule, CountryRoutingModule, CountryViewModule, MainInfoContentModule],
})
export class CountryModule {}
