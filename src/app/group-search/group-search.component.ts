import { Component, OnInit } from '@angular/core';
import { GroupDetailsService } from '../group-details.service';
import { GroupInfo } from '../group/group-info.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.css']
})

export class GroupSearchComponent implements OnInit {

  groupLists: GroupInfo[];
  constructor(private groupSrvc: GroupDetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.groupLists = this.groupSrvc.getGroupsList();
  }

  autocompleteList(data: any) {
    return data.groupDesc;
  }

  myCallback(val: any) {
    if (val && val.groupName) {
      this.router.navigate(['group', val.groupName], { relativeTo: this.route });
    }

  }
}
