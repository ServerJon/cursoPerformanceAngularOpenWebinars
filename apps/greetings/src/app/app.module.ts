import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';

import { GreetingsComponent, GreetingsModule } from '@ui';

@NgModule({
  imports: [BrowserModule, GreetingsModule],
  entryComponents: [GreetingsComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(GreetingsComponent, {
      injector: this.injector
    });
    customElements.define('greetings-web-component', el);
  }
}
