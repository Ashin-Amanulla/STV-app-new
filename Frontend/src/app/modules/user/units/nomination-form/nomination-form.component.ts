import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { positions } from 'src/assets/data';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-nomination-form',
  templateUrl: './nomination-form.component.html',
  styleUrls: ['./nomination-form.component.scss']
})
export class NominationFormComponent {

  position: any
  myFormGroup: FormGroup;
  selectedItem: any
  selectedId: any

  constructor(private router: Router, private api: AdminService, private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      year: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['', Validators.required],
      position: ['', Validators.required],
      declaration: ['', Validators.required],
      posRef:['']
    });
  }

  ngOnInit() {
    this.api.getElectionList().subscribe((res: any) => {
      this.position = res.data[0].positions
      console.log(this.position)
    })
  }

  goBack() {
    this.router.navigate(['/user'])
  }

  submit() {
    let value = this.myFormGroup.value;
    this.myFormGroup.value.position = this.selectedItem.title;
    this.myFormGroup.value.posRef = this.selectedId;

    this.api.applyCandidate(value,this.selectedId).subscribe((res: any) => { console.log(res) });
  }

  onSelectionChange() {
    // Extract the Mongo ID from the selected object and store it in local storage
    this.selectedId = this.selectedItem._id;
    console.log(this.selectedId)
  }

}
