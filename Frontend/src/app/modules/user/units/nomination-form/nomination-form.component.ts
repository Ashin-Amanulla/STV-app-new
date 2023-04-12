import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { positions } from 'src/assets/data';
@Component({
  selector: 'app-nomination-form',
  templateUrl: './nomination-form.component.html',
  styleUrls: ['./nomination-form.component.scss']
})
export class NominationFormComponent {

  position: any
  
  constructor(private router:Router){}

  ngOnInit() { 
    this.position = positions
  }

  goBack() {
    this.router.navigate(['/user'])
  }

  submit() {
    
  }

}
