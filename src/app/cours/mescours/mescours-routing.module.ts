import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MescoursComponent } from 'mescours/mescours.component';

const routes: Routes = [{
  path:'',
  component:MescoursComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MescoursRoutingModule { }
