import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
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
      email: ['', Validators.required],
      message: ['', Validators.required],
      
    })
}


onSubmit(): void {

  let value = this.complaintForm.value;
  this.api.sendComplaints(value).subscribe(res => {
    console.log(res)
    this.router.navigate(['/admin'])
  })
}

}
