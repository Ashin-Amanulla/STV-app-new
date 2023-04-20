import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DeclareElectionComponent } from './election/declare-election/declare-election.component';
import { ListPositionsComponent } from './positions/list-positions/list-positions.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: 'declare-election', component: DeclareElectionComponent
      },
      {
        path: 'positions', component: ListPositionsComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
