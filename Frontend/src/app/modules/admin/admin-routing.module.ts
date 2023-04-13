import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DeclareDateComponent } from './units/declare-date/declare-date.component';

const routes: Routes = [
  {
    path:'',component:AdminHomeComponent
  },
  {
    path:'declare-date',component:DeclareDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
