import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ListeenseignantComponent } from './listeenseignant/listeenseignant.component';
import { BadgeComponent } from './badge/badge.component';
import { UserComponent } from './user/user.component';
import { PermissionComponent } from './permission/permission.component';
import { CompteComponent } from './compte/compte.component';
import { CompteajoutComponent } from './compteajout/compteajout.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CreercatComponent } from './creercat/creercat.component';
import { CreercoursComponent } from './creercours/creercours.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path:'',
  component: AdministrationComponent
},
{
  path:'listeenseignant',
  component:ListeenseignantComponent
},
{
  path:'badge',
  component:BadgeComponent
},
{
  path:'user',
  component:UserComponent
},
{
  path:'permission',
  component:PermissionComponent
},
{
  path:'compte',
  component:CompteComponent
},
{
  path:'compteajout',
  component:CompteajoutComponent
},
{
  path:'listeuser',
  component:ListeuserComponent
},
{
  path:'course',
  component:CourseComponent
},
{
  path:'courses',
  component:CoursesComponent
},
{
  path:'creercat',
  component:CreercatComponent
},
{
  path:'creercours',
  component:CreercoursComponent
}
,
{
  path:'profil',
  component:ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
