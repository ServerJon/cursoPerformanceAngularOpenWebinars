import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { RegionInfoComponent } from './region-info.component';
import { CustomIdModule } from '../pipes/custom-id/custom-id.module';
import { CheckIdModule } from '../directives/check-id/check-id.module';

@NgModule({
  declarations: [RegionInfoComponent],
  imports: [CommonModule, MatTableModule, MatSortModule, CustomIdModule, CheckIdModule],
  exports: [RegionInfoComponent],
})
export class RegionInfoModule {}
