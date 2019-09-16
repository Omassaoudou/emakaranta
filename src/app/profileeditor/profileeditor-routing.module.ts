import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileeditorComponent } from './profileeditor.component';

const routes: Routes = [{
  path:'',
  component: ProfileeditorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileeditorRoutingModule { }
