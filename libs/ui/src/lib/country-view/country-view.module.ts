import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

import { CountryViewComponent } from './country-view.component';


@NgModule({
  declarations: [
    CountryViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    CountryViewComponent
  ]
})
export class CountryViewModule { }
