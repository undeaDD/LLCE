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
import { FormsModule } from '@angular/forms';
import { CheckComponent } from '../check/check.component';
import { ExamComponent } from '../exam/exam.component';
import { TaskComponent } from '../task/task.component';
import { LeaveGuard } from '../services/leave/leaveguard';
import { ResultComponent } from '../result/result.component';

@NgModule({
  declarations: [
    CheckComponent,
    ExamComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ImprintComponent,
    LearnComponent,
    LoginComponent,
    PrivacyComponent,
    RegisterComponent,
    RootComponent,
    TaskComponent,
    ResultComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RootRoutingModule
  ],
  providers: [
    Title,
    UserService,
    ApiService,
    LeaveGuard
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule { }
