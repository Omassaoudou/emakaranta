import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacklComponent } from './packl.component';

const routes: Routes = [{
  path:'',
  component: PacklComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacklRoutingModule { }
