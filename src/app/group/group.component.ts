import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupDetailsService } from '../group-details.service';
import { GroupInfo } from './group-info.model';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  editDetails: boolean = false;
  groupInfo: GroupInfo;
  cols: any;
  constructor(private route: ActivatedRoute, private groupSrvc: GroupDetailsService, private auth: AuthService, private sharedSrvc: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupInfo = this.groupSrvc.getGroupDetail(params.name);
      this.editDetails = false;
      this.groupInfo.adminList.map((admin) => {
        this.sharedSrvc.getLoggedInUser().subscribe((user: any) => {
          if (user && user.userEmail) {
            if (admin.userEmail == user.userEmail) {
              this.editDetails = true;
            }
          }
        })
      });
    });

    this.cols = [
      { field: 'userName', header: "Member Name" },
      { field: 'userEmail', header: "Member E-Mail ID" }
    ];
  }

  removeMemberFromList(email: string) {
    this.groupInfo.memberList = this.groupSrvc.removeMember(email, this.groupInfo.groupName);
    console.log(2222, this.groupInfo.memberList);
  }

}
