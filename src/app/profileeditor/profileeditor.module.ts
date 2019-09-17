import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileeditorRoutingModule } from './profileeditor-routing.module';
import { ProfileeditorComponent } from './profileeditor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileeditorComponent],
  imports: [
    CommonModule,
    ProfileeditorRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileeditorModule { } 
