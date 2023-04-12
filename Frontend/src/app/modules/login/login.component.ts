import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hideDiv: boolean = false;
  showDiv: boolean = true;

  constructor(private router: Router) { }

  getOtp() {
    this.showDiv = !this.showDiv;
    this.hideDiv = !this.hideDiv;
  }

  login() {
    this.router.navigate(['/user']);
  }
}
