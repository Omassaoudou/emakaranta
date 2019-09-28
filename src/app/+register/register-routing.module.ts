import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { AfteregisterComponent } from './afteregister/afteregister.component';

const routes: Routes = [{
  path: '',
  component: RegisterComponent
},
{
  path:'afteregister',
  component: AfteregisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
