import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  navClick: boolean = false;
  election: any
  positions:any
  constructor(private router: Router, private api: AdminService) { }


  ngOnInit() {
    this.api.getElectionList().subscribe((res: any) => {
      this.election = res.data[0]
      this.positions = res.data[0].positions
      console.log(this.positions)
    })
  }
  showNav() {
    this.navClick = !this.navClick;
  }

  scroll(el: HTMLElement) {

    if (this.navClick) {
      this.navClick = false;
    }
    el.scrollIntoView({ behavior: 'smooth' });
  }


  logout() {
    this.router.navigate(['/'])
  }

}
