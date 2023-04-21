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
  user_election_id:any

  constructor(private router: Router, private api: AdminService, private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      year: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['', Validators.required],
      position: ['', Validators.required],
      declaration: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.api.getElectionList().subscribe((res: any) => {
      this.user_election_id = res.data[0]._id
      this.position = res.data[0].positions
      console.log(this.position)
    })
  }

  goBack() {
    this.router.navigate(['/user'])
  }

  submit() {
    let value = this.myFormGroup.value
    console.log(this.user_election_id,this.selectedId)
    this.api.applyCandidate(value, this.user_election_id,this.selectedId).subscribe((res: any) => { console.log(res) });
  }

  onSelectionChange() {
    // Extract the Mongo ID from the selected object and store it in local storage
    this.selectedId = this.selectedItem;
    console.log(this.selectedId)
  }

}
