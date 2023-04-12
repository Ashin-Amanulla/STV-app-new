import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { positions } from 'src/assets/data';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  positions: any;

  constructor(private router: Router) { }
  
  ngOnInit(): void { 
    this.positions = positions
  }
  goto(position: string) {
    localStorage.setItem('position', position)
    this.router.navigate(['user/candidates'])
  }
}
