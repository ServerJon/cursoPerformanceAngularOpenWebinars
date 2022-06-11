import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { CountryService } from '@data';
import { RegionViewComponent } from './components/region-view/region-view.component';
import { CountryInfoModule } from '@ui';

@NgModule({
  declarations: [RegionComponent, RegionViewComponent],
  providers: [CountryService],
  imports: [CommonModule, RegionRoutingModule, CountryInfoModule],
})
export class RegionModule {}
