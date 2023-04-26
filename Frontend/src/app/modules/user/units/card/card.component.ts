import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
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
    
  goto(position: any) {
    localStorage.setItem('position', position._id)
    this.router.navigate([`user/candidates/${position.title}`])
  }
}
