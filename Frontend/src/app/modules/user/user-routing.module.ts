import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { CandidateComponent } from './units/candidate/candidate.component';



const routes: Routes = [
  {
    path:'',component:UserHomeComponent
  },
  {
    path:'candidates',component:CandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
