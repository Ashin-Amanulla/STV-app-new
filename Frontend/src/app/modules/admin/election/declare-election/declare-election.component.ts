import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';


@Component({
  selector: 'app-declare-election',
  templateUrl: './declare-election.component.html',
  styleUrls: ['./declare-election.component.scss']
})
export class DeclareElectionComponent {
  

 

  electionForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private config: NgSelectConfig) {
    this.electionForm = this.fb.group({
      nomination_start: ['', Validators.required],
      nomination_end: ['', Validators.required],
      voting_start: ['', Validators.required],
      voting_end: ['', Validators.required],
      result_day:['', Validators.required],
    })

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    // set the bindValue to global config when you use the same 
    // bindValue in most of the place. 
    // You can also override bindValue for the specified template 
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';


  }



  onSubmit(): void {
    let value = this.electionForm.value;
    console.log(value)
  }

  options = ['Option 1', 'Option 2', 'Option 3'];
  selectedOptions:any;
  selectAll = false;

  selectAllOptions(event:any) {
    this.selectedOptions = event.target.checked ? this.options : [];
  }
  
}
