import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { President,Secretary,VicePresident } from 'src/assets/data';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {

  position: any
  data: any
  preference:string[] = []

  constructor(private router:Router){}

  ngOnInit() { 
    this.position = localStorage.getItem('position')
    if (this.position === 'President') {
      this.data = President
    }else if (this.position === 'Secretary') {
      this.data = Secretary
    }else if (this.position === 'Vice President') {
      this.data = VicePresident
    }
  }

  addto(name: string) {
    if (this.preference.length === 0) {
      this.preference.push(name)
    } else {
      let alreadyVoted = false
      this.preference.forEach(res => {
        if (res === name) {
          const newPreference = this.preference.filter(candidate => candidate !== name)
          this.preference = newPreference
          alreadyVoted = true
        }
      })
      if (!alreadyVoted) {
        this.preference=[...this.preference,name]
    }
    }
  }

  goBack() {
    this.router.navigate(['/user'])
  }

  abstain() {
    confirm("Are tou sure you want to abstain?")
  }

  reset() {
    this.preference = []
  }

  submit() {
    confirm("Are tou sure you want to submit?")
  }
}
