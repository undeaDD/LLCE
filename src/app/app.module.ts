import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { HomeComponent } from './home/home.component';
import { ExammodusComponent } from './exammodus/exammodus.component';
import { CheckmodusComponent } from './checkmodus/checkmodus.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { Bg1Component } from './bg1/bg1.component';
import { Bg2Component } from './bg2/bg2.component';
import { Card2Component } from './card2/card2.component';


@NgModule({
  declarations: [
    AppComponent,
    LernmodusComponent,
    HomeComponent,
    ExammodusComponent,
    CheckmodusComponent,
    HeaderComponent,
    CardComponent,
    Bg1Component,
    Bg2Component,
    Card2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
