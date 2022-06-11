import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { RegionInfoComponent } from './region-info.component';

@NgModule({
  declarations: [RegionInfoComponent],
  imports: [CommonModule, MatTableModule, MatSortModule],
  exports: [RegionInfoComponent]
})
export class RegionInfoModule {}
