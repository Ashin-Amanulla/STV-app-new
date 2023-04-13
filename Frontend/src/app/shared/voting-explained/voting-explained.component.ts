import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting-explained',
  templateUrl: './voting-explained.component.html',
  styleUrls: ['./voting-explained.component.scss']
})
export class VotingExplainedComponent {

  constructor(private router: Router) { }
  
  goto() {
   this.router.navigate(['/user/nomination']) 
  }

}
