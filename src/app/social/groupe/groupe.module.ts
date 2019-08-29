import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupeRoutingModule } from './groupe-routing.module';
import { GroupeComponent } from './groupe.component';

@NgModule({
  declarations: [GroupeComponent],
  imports: [
    CommonModule,
    GroupeRoutingModule
  ]
})
export class GroupeModule { }
