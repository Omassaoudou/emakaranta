import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackComponent } from './pack.component';

const routes: Routes = [{
  path:'',
  component: PackComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackRoutingModule { }
