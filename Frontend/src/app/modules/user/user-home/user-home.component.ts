import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  navClick: boolean = false;

  constructor(private router:Router){}

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
