import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckIdDirective } from './check-id.directive';



@NgModule({
  declarations: [
    CheckIdDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckIdDirective
  ]
})
export class CheckIdModule { }
