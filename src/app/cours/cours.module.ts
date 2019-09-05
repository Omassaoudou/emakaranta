import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import { CreercoursComponent } from './creercours/creercours.component';
import { MescoursComponent } from './mescours/mescours.component';
// import { CreercoursComponent } from './creercours/creercours.component';
// import { MescoursComponent } from './mescours/mescours.component';

@NgModule({
  declarations: [CoursComponent, CreercoursComponent, MescoursComponent],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
