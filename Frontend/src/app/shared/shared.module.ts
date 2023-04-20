import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { VotingExplainedComponent } from './voting-explained/voting-explained.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    VotingExplainedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    FooterComponent,
    VotingExplainedComponent,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class SharedModule { }
