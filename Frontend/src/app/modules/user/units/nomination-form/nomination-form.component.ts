import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { positions } from 'src/assets/data';
@Component({
  selector: 'app-nomination-form',
  templateUrl: './nomination-form.component.html',
  styleUrls: ['./nomination-form.component.scss']
})
export class NominationFormComponent {

  position: any
  myFormGroup: FormGroup;

  constructor(private router: Router) {
    this.myFormGroup = new FormGroup({
      name: new FormControl(''),
      desc: new FormControl(''),
      img: new FormControl(''),
      position: new FormControl('')
    });
  }

  ngOnInit() { 
    this.position = positions
  }

  goBack() {
    this.router.navigate(['/user'])
  }

  submit() {
    console.log(this.myFormGroup.value);
  }

}
