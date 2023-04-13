import { Component } from '@angular/core';
import { VicePresident } from 'src/assets/data';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent {
  data: any
  ngOnInit() { 
    this.data = VicePresident
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 10)+400;
  }
}
