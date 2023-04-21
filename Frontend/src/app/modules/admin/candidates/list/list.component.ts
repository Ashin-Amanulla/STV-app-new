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
  pos_id: any;
  deletingItem: any = null;

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pos_id = localStorage.getItem('pos_id');
    let pos = localStorage.getItem('position')
    this.api.getActivePositions(this.id).subscribe((res: any) => {
      let incomingData = res.data[0].positions;
      let candidates = incomingData.filter((e: any) => e.title === pos);
      this.lists = candidates[0].candidates
      console.log(this.lists)
    })
  }





  viewItem(id: any) { }

  deleteItem(item: any) {
    let id = item._id;
    this.deletingItem = item;

    this.api.deleteCandidate(id, this.id, this.pos_id).subscribe((res: any) => {
      console.log(res)
      setTimeout(() => {
        this.lists = this.lists.filter((e: any) => e._id !== id)
        this.deletingItem = null;
      }, 500)
    })
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
