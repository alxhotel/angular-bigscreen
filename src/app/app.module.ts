import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BigScreenModule } from 'angular-bigscreen';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BigScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
