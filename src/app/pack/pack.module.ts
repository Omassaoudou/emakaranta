import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackRoutingModule } from './pack-routing.module';
import { PackComponent } from './pack.component';

@NgModule({
  declarations: [PackComponent],
  imports: [
    CommonModule,
    PackRoutingModule
  ]
})
export class PackModule { }
