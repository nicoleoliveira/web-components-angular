import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import {createCustomElement} from '@angular/elements';

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(ButtonComponent, {injector});
    customElements.define('wc-button', custom);
  }

  ngDoBootstrap() {}
 }
