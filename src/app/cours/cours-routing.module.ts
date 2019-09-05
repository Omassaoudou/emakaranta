import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours.component';
import { CreercoursComponent } from './creercours/creercours.component';
import { MescoursComponent } from './mescours/mescours.component';

const routes: Routes = [{
  path:'',
  component: CoursComponent
},
{
  path:'',
  component:CreercoursComponent
},
{
  path:'',
  component:MescoursComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
