import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule],
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule
  ]
})
export class AppMaterialModule { }
