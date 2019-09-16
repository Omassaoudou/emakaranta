import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameRoutingModule } from './name-routing.module';
import { NameComponent } from './name.component';

@NgModule({
  declarations: [NameComponent],
  imports: [
    CommonModule,
    NameRoutingModule
  ]
})
export class NameModule { } 
