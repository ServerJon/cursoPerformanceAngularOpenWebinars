import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryViewModule } from '@ui';
import { CountryService } from '@data';

@NgModule({
  declarations: [CountryComponent],
  providers: [CountryService],
  imports: [CommonModule, CountryRoutingModule, CountryViewModule],
})
export class CountryModule {}
