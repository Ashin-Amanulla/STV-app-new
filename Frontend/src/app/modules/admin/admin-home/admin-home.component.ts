import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {  

  navClick: boolean = false;

  constructor(private router: Router){}

  showNav() {
    this.navClick = !this.navClick;
  }

  scroll(el: HTMLElement) {
  
    if(this.navClick){
      this.navClick = false;
    }
    el.scrollIntoView({ behavior: 'smooth' });
  }

  logout() {
    this.router.navigate(['/'])
  }

}
