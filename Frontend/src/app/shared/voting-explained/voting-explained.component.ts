import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-voting-explained',
  templateUrl: './voting-explained.component.html',
  styleUrls: ['./voting-explained.component.scss','../../../assets/styles/global_style.scss']
})
export class VotingExplainedComponent {

  constructor(private router: Router, private api:AdminService) { }
  election:any
  goto() {
   this.router.navigate(['/user/nomination']) 
  }

  ngOnInit() {
    this.api.getElectionList().subscribe((res: any) => {
      this.election = res.data[0]
    })
  }

}
