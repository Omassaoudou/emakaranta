import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackRoutingModule } from './pack-routing.module';
import { PackComponent } from './pack.component';
import { PacklComponent } from './packl/packl.component';

@NgModule({
  declarations: [PackComponent, PackComponent, PacklComponent,],
  imports: [
    CommonModule,
    PackRoutingModule
  ]
})
export class PackModule { }
