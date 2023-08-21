import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { UserService } from '../services/user/user.service';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { HeaderComponent } from './../header/header.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { ApiService } from '../services/api/api.service';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { LearnComponent } from '../learn/learn.component';
import { HomeComponent } from '../home/home.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { PrivacyComponent } from '../privacy/privacy.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ImprintComponent,
    LearnComponent,
    LoginComponent,
    PrivacyComponent,
    RegisterComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule
  ],
  providers: [
    Title,
    UserService,
    ApiService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule { }
