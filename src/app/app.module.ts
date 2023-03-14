import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabellinaComponent } from './tabellina/tabellina.component';
import {MatTableModule} from '@angular/material/table';
import { BottoneComponent } from './bottone/bottone.component';


@NgModule({
  declarations: [
    AppComponent,
    TabellinaComponent,
    BottoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
