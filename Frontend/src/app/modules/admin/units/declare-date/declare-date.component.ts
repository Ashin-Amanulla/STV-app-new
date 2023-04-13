import { Component } from '@angular/core';

@Component({
  selector: 'app-declare-date',
  templateUrl: './declare-date.component.html',
  styleUrls: ['./declare-date.component.scss']
})
export class DeclareDateComponent {
  startDate: string = ''
  endDate: string = ''
  
  submit() {
    console.log(this.startDate, this.endDate)
    this.startDate = ''
    this.endDate = ''
  }

}
