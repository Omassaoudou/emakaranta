import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackComponent } from './pack.component';
import { PacklComponent } from './packl/packl.component';
const routes: Routes = [{
  path:'',
  component: PackComponent
},
{
  path:'packl',
  component:PacklComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackRoutingModule { }
