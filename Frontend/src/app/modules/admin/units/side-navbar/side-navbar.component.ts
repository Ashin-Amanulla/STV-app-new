import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  loginUser: any;
  isAuthorized(): boolean {
    return true;
  }

  logout(){}

  toView(){}
}
