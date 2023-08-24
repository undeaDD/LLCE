import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { LearnComponent } from '../learn/learn.component';
import { CheckComponent } from '../check/check.component';
import { ExamComponent } from '../exam/exam.component';
import { TaskComponent } from '../task/task.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'learn', component: LearnComponent},
  {path: 'check', component: CheckComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'task', component: TaskComponent},
  {path: '**', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class RootRoutingModule { }
