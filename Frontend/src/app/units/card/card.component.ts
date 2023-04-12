import { Component } from '@angular/core';
import { positions } from 'src/assets/positions';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  positions: any;
  ngOnInit(): void { 
    this.positions = positions
  }
}
