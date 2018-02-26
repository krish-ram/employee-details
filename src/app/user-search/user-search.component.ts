import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfo } from '../user/user-info.model';
import { UserGroup } from '../user/user-group.model';
import { UserList } from '../shared/user-list.model';
import { UserDetailsService } from '../user-details.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent implements OnInit {

  term: string;
  userInfo: UserInfo;
  userGroups: UserGroup[];
  userLists: UserList[];
  userSelected: boolean = false;

  constructor(private userSrvc: UserDetailsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userLists = this.userSrvc.getUserList();
  }

  myCallback(val: any) {
    if (val && val.userEmail) {
      this.userSelected = true;
      this.router.navigate(['user', val.userEmail], { relativeTo: this.route });
    }
  }

  autocompleteList = (data: any) => {
    return data.userName;
  }
}
