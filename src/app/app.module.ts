import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./components/home/home.component";
import {MoviesModule} from "./module/movies/movies.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
