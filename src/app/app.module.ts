import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModulos } from './heroes/heroes.module';
import { contadorModulos } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModulos,
    contadorModulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
