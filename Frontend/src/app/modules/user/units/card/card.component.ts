import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { positions } from 'src/assets/data';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  positions: any;

  constructor(private router: Router, private api:AdminService) { }
  
  ngOnInit(): void { 
    this.api.getElectionList().subscribe((res: any) => {
      this.positions = res.data[0].positions
    })  }
    
  goto(position: string) {
    localStorage.setItem('position', position)
    this.router.navigate(['user/candidates'])
  }
}
