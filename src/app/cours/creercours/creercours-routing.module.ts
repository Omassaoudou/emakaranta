import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreercoursComponent } from './creercours.component';

const routes: Routes = [{
  path:'',
  component:CreercoursComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreercoursRoutingModule { }
