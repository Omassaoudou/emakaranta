import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';

@NgModule({
  declarations: [CoursComponent],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
