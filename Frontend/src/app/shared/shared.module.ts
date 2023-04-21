import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { VotingExplainedComponent } from './voting-explained/voting-explained.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatterPipe } from '../pipes/date-formatter.pipe';


@NgModule({
  declarations: [
    FooterComponent,
    VotingExplainedComponent,
    DateFormatterPipe
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
    DateFormatterPipe
    
  ]
})
export class SharedModule { }
