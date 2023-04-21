import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private route: ActivatedRoute, private api: AdminService, private router: Router) { }

  lists: any;
  id: any;
  deletingItem: any = null;

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.id = this.route.snapshot.paramMap.get('id');
    let pos_id = localStorage.getItem('pos_id');
    let position = localStorage.getItem('position')
    this.api.getCandidates(this.id, pos_id).subscribe((res: any) => {
      console.log(res.data[0].positions);
    })
  }





  viewItem(id: any) { }

  deleteItem(id: any) { }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
