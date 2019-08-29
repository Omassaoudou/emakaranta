import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmiRoutingModule } from './ami-routing.module';
import { AmiComponent } from './ami.component';

@NgModule({
  declarations: [AmiComponent],
  imports: [
    CommonModule,
    AmiRoutingModule
  ]
})
export class AmiModule { }
