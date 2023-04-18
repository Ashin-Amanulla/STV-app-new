import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showDiv: boolean = true;
  emailLogin!: FormGroup
  otpLogin!: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) {

    this.emailLogin = this.fb.group({
      email: ['', Validators.required]
    });

    this.otpLogin = this.fb.group({
      otp: ['', Validators.required]
    })
  }

  getOtp() {
    let value = this.emailLogin.value;
    this.auth.beforeOTP(value).subscribe(data=>{
      console.log(data);
      localStorage.setItem('email',value.email)
      this.showDiv = !this.showDiv;

    })
  }

  login() {
    let otp = this.otpLogin.value.otp;
    let email = localStorage.getItem('email');
    let value = {email,otp}
   this.auth.afterOTP(value).subscribe(data=>{
    console.log(data)
    this.router.navigate(['/user']);
   })

  }

  onSubmit() { }
}
