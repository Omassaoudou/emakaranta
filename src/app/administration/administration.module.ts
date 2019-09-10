import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdministrationComponent, 
    ListeenseignantComponent, 
    BadgeComponent, 
    UserComponent, 
    PermissionComponent, 
    CompteComponent, 
    CompteajoutComponent, 
    ListeuserComponent, 
    CourseComponent, 
    CoursesComponent, 
    CreercatComponent, 
    CreercoursComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdministrationRoutingModule
  ],
  providers: [],
  bootstrap: [AdministrationComponent]
})
export class AdministrationModule { }
