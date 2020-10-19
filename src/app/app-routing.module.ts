import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './chart-modules/home/home.component';
import { ComplianceComponent } from './chart-modules/compliance/compliance.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProgramEffectivenessComponent } from './chart-modules/program-effectiveness/program-effectiveness.component';
import { LearningComponent } from './chart-modules/learning/learning.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '', component: MainscreenComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'adoption', component: ComplianceComponent
      },
      {
        path: 'program-effectivness', component: ProgramEffectivenessComponent
      },
      {
        path: 'learning', component: LearningComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
