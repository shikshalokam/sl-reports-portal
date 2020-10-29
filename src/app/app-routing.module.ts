import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainscreenComponent } from './mainscreen/mainscreen.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '', component: MainscreenComponent, children: [
      {
        path: 'home', loadChildren:()=>import('./chart-modules/home/home.module').then(m=>m.HomeModule)
      },
      { path: 'compliance', loadChildren:()=>import('./chart-modules/compliance/compliance.module').then(m=>m.ComplianceModule)  }
      ,
     
      {
        path: 'program-effectivness', loadChildren:()=>import('./chart-modules/program-effectiveness/program-effectiveness.module').then(m=>m.ProgramEffectivenessModule)
      },
      {
        path: 'learning', loadChildren:()=>import('./chart-modules/learning/learning.module').then(m=>m.LearningModule)
      },
      {
        path:'engagement', loadChildren:()=>import('./chart-modules/engagement/engagement.module').then(m=>m.EngagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
