import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';
import { UserInfo } from './user-info.model';
import { UserGroup } from './user-group.model';
import { UserList } from './user-list.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  term: string;
  userInfo: UserInfo;
  userGroups: UserGroup[];
  userLists: UserList[];
  @Input() email;

  constructor(private userSrvc: UserDetailsService) { }

  ngOnInit() {
    this.userLists = this.userSrvc.getUserList();
  }

  myCallback(email: string) {
    console.log(email);
    this.userInfo = this.userSrvc.getUserDetail(email);
    console.log(this.userInfo);
    this.userGroups = this.userInfo.userGroups;
  }

  autocompleList = (data: any) => {
    return data.userName;
  }

}
