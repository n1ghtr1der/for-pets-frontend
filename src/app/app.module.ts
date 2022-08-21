import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForPetsModule } from './for-pets/for-pets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ForPetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
