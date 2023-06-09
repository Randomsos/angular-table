import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabellinaComponent } from './tabellina/tabellina.component';
import {MatTableModule} from '@angular/material/table';
import { BottoneComponent } from './bottone/bottone.component';
import { EliminaComponent } from './elimina/elimina.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    BottoneComponent,
    EliminaComponent,
    TabellinaComponent,
    BottoneComponent,
    EliminaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
