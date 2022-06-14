import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingsComponent } from './greetings.component';

@NgModule({
  declarations: [
    GreetingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreetingsComponent
  ]
})
export class GreetingsModule { }
