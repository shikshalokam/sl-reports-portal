import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplianceComponent } from '../compliance/compliance.component';


const routes: Routes = [{path: 'adoption', component: ComplianceComponent}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceRoutingModule { }
