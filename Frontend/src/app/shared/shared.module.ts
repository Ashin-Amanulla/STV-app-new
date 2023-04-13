import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { VotingExplainedComponent } from './voting-explained/voting-explained.component';



@NgModule({
  declarations: [
    FooterComponent,
    VotingExplainedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    VotingExplainedComponent
  ]
})
export class SharedModule { }
