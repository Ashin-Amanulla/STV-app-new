import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  complaintForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  private api: SharedService) {
    this.complaintForm = this.fb.group({
      name:['', Validators.required],
      email: ['', Validators.required,Validators.email],
      message: ['', Validators.required],
      
    })
}


onSubmit(): void {

  let value = this.complaintForm.value;
  this.api.sendComplaints(value).subscribe((res:any) => {
    if (res.status) {
      Swal.fire({
        icon: 'success',
        title: ' Sent',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.complaintForm.reset()
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.complaintForm.reset()
      })
    }
  })
}

}
