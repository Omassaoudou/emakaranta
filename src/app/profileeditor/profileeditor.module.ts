import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileeditorRoutingModule } from './profileeditor-routing.module';
import { ProfileeditorComponent } from './profileeditor.component';

@NgModule({
  declarations: [ProfileeditorComponent],
  imports: [
    CommonModule,
    ProfileeditorRoutingModule
  ]
})
export class ProfileeditorModule { }
