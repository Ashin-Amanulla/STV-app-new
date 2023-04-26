import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Candidate } from 'src/app/interface/candidate';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})



export class CandidateComponent {



  position: any
  data: any
  pos: any
  preference: Candidate[] = []
  selectedOrder: string[] = [];
  isDisabled: boolean = true;

  constructor(private router: Router, private api: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.position = localStorage.getItem('position')
    this.pos = this.route.snapshot.paramMap.get('position');
    this.api.getCandidates(this.position).subscribe((res: any) => {
      this.data = res;
    })
  }

  addto(obj: any) {
    if (this.preference.length === 0) {
      this.preference.push(obj)
    } else {
      let alreadyVoted = false
      this.preference.forEach(res => {
        if (res === obj) {
          const newPreference = this.preference.filter(candidate => candidate !== obj)
          this.preference = newPreference
          alreadyVoted = true
        }
      })
      if (!alreadyVoted) {
        this.preference = [...this.preference, obj]
      }
    }

    this.selectedOrder = this.preference.map(e => e._id)
    if (this.selectedOrder.length > 0) { this.isDisabled = false }
    else { this.isDisabled = true }
  }

  goBack() {
    this.router.navigate(['/user'])
  }

  abstain() {
    let email = 'ashdsd2n@gmail.com'
    this.selectedOrder = []
    let data = { voters: email, votes: this.selectedOrder }
    if (window.confirm("Are tou sure you want to abstain?")) {
      this.api.submitVotes(data, this.position).subscribe((res: any) => {
        console.log(res)
      })
    }
  }

  reset() {
    this.preference = [];
    this.selectedOrder = []
  }

  submit() {
    let email = 'ashin@gmail.com'

    let data = { voters: email, votes: this.selectedOrder }
    if (window.confirm("Are tou sure you want to submit?")) {
      this.api.submitVotes(data, this.position).subscribe((res: any) => {
        console.log(res)
      })
    }
  }
}
