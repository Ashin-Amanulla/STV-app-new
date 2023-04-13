import { Component } from '@angular/core';
import { President } from 'src/assets/data';
@Component({
  selector: 'app-req-table',
  templateUrl: './req-table.component.html',
  styleUrls: ['./req-table.component.scss']
})
export class ReqCardComponent {

  data: any

  ngOnInit() { 
    this.data = President
  }

}
