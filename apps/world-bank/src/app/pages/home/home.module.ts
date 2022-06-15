import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegionService } from '@data';
import { InfoComponent } from './components/info/info.component';
import { RegionInfoModule, MainInfoTemplateModule } from '@ui';

@NgModule({
  declarations: [HomeComponent, InfoComponent],
  providers: [RegionService],
  imports: [CommonModule, HomeRoutingModule, RegionInfoModule, MainInfoTemplateModule],
})
export class HomeModule {}
