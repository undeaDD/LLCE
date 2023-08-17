import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { CheckmodusComponent } from './checkmodus/checkmodus.component';
import { ExammodusComponent } from './exammodus/exammodus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'lernmodus',component:LernmodusComponent},
  {path:'',component:CheckmodusComponent},
  {path:'',component:ExammodusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
