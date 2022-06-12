import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIdPipe } from './custom-id.pipe';



@NgModule({
  declarations: [
    CustomIdPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomIdPipe
  ]
})
export class CustomIdModule { }
