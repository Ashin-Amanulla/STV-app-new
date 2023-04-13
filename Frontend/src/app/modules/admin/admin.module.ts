import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReqCardComponent } from './units/req-table/req-table.component';
import { DeclareDateComponent } from './units/declare-date/declare-date.component';
import { ResultTableComponent } from './units/result-table/result-table.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    ReqCardComponent,
    DeclareDateComponent,
    ResultTableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
