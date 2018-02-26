import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserInfo } from './user-info.model';
import { UserGroup } from './user-group.model';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userInfo: UserInfo;
  userGroups: UserGroup[];
  constructor(private route: ActivatedRoute, private userSrvc: UserDetailsService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['email']);
    this.userInfo = this.userSrvc.getUserDetail(this.route.snapshot.params['email']);
    this.userGroups = this.userInfo.userGroups;

    this.route.params.subscribe((params: Params) => {
      this.userInfo = this.userSrvc.getUserDetail(params.email);
      this.userGroups = this.userInfo.userGroups;
    });
  }


}
