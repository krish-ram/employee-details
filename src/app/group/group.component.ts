import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupDetailsService } from '../group-details.service';
import { GroupInfo } from './group-info.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupInfo: GroupInfo;
  cols: any;
  constructor(private route: ActivatedRoute, private groupSrvc: GroupDetailsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupInfo = this.groupSrvc.getGroupDetail(params.name);
      console.log(this.groupInfo);
    });

    this.cols = [
      { field: 'userName', header: "Member Name" },
      { field: 'userEmail', header: "Member E-Mail ID" }
    ];
  }

}
