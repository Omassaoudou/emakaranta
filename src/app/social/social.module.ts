import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AmiComponent } from './ami/ami.component';
import { GroupeComponent } from './groupe/groupe.component';

@NgModule({
  declarations: [SocialComponent, ActualiteComponent, AmiComponent, GroupeComponent],
  imports: [
    CommonModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
