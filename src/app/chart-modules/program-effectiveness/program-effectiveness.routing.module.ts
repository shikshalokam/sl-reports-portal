import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramEffectivenessComponent } from './program-effectiveness.component';



const routes: Routes = [{path: 'program', component: ProgramEffectivenessComponent}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramEffectivenessRoutingModule { }
