import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialComponent } from './social.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AmiComponent } from './ami/ami.component';
import { GroupeComponent } from './groupe/groupe.component';

const routes: Routes = [{
  path:'',
  component: SocialComponent 
},
{
  path:'actualite',
  component: ActualiteComponent 
},
{
  path:'ami',
  component: AmiComponent 
},
{
  path:'groupe',
  component: GroupeComponent 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
