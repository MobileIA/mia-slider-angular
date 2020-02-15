import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderModule } from 'projects/mobileia/slider/src/public-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SliderModule.forRoot({ baseUrl: 'http://0.0.0.0:8080/' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
