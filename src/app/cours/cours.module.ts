import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { MescoursComponent } from './mescours/mescours.component';
import { CoursComponent } from './cours.component';
import { OptionComponent } from './option/option.component';
import { ParticipantComponent } from './participant/participant.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NoteComponent } from './note/note.component';
import { BadgeComponent } from './badge/badge.component';
import { ModificationComponent } from './modification/modification.component';
import { NoterComponent } from './noter/noter.component';
import { LirecoursComponent } from './lirecours/lirecours.component';

@NgModule({
  declarations: [CoursComponent , MescoursComponent, OptionComponent, ParticipantComponent, EvaluationComponent, ExerciceComponent, NoteComponent, BadgeComponent, ModificationComponent, NoterComponent, LirecoursComponent],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
