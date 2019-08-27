import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibreComponent } from './libre.component';

const routes: Routes = [{
  path: '',
  component: LibreComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibreRoutingModule { }
 