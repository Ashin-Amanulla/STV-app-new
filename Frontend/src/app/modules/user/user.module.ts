import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CardComponent } from './units/card/card.component';
import { CandidateComponent } from './units/candidate/candidate.component';
import { NominationFormComponent } from './units/nomination-form/nomination-form.component';

@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    CardComponent,
    CandidateComponent,
    NominationFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
