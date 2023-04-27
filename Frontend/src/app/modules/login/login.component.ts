import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';


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
    this.auth.beforeOTP(value).subscribe((res:any) => {
      console.log('hi')
         if (res.status) {
      Swal.fire({
        icon: 'success',
        title: ' Sent',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.emailLogin.reset();
        localStorage.setItem('email', value.email)
        this.showDiv = !this.showDiv;
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'res.error',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.emailLogin.reset()
      })
    }


    })
  }

  login() {
    let otp = this.otpLogin.value.otp;
    let email = localStorage.getItem('email');
    let value = { email, otp }
    this.auth.afterOTP(value).subscribe((res:any) => {
      if (res.status) {
        Swal.fire({
          icon: 'success',
          title: ' Sent',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.otpLogin.reset();
          this.router.navigate(['/user']);        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'res.error',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.otpLogin.reset()
        })
      }     
    })

  }

}
