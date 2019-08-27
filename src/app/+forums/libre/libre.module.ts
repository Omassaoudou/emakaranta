import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibreRoutingModule } from './libre-routing.module';
import { LibreComponent } from './libre.component';

@NgModule({
  declarations: [LibreComponent],
  imports: [
    CommonModule,
    LibreRoutingModule
  ]
})
export class LibreModule { }
