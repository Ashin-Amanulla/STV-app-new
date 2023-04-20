import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideNavbarComponent } from './units/side-navbar/side-navbar.component';
import { DeclareElectionComponent } from './election/declare-election/declare-election.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AdminComponent,
    SideNavbarComponent,
    DeclareElectionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class AdminModule { }
