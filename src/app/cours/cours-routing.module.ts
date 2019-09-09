import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours.component';
import { MescoursComponent } from './mescours/mescours.component';
import { CreercoursComponent } from './creercours/creercours.component';
import { OptionComponent } from './option/option.component';
import { BadgeComponent } from './badge/badge.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NoteComponent } from './note/note.component';
import { ParticipantComponent } from './participant/participant.component';
import { ModificationComponent } from './modification/modification.component';

const routes: Routes = [{
  path:'',
  component:CoursComponent
},
{
  path:'mescours',
  component:MescoursComponent
},
{
  path:'creercours',
  component:CreercoursComponent
},
{
  path:'option',
  component:OptionComponent
},
{
  path:'badge',
  component:BadgeComponent
},
{
  path:'evaluation',
  component:EvaluationComponent
},
{
  path:'exercice',
  component:ExerciceComponent
},
{
  path:'note',
  component:NoteComponent
},
{
  path:'participant',
  component:ParticipantComponent
},
{
  path:'modification',
  component:ModificationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
