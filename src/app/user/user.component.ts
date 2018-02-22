import { Component, OnInit, Input } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { UserInfo } from './user-info.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userInfo: UserInfo;
  @Input() email;
  
  constructor(private userSrvc: UserDetailsService) { }

  ngOnInit() {
    this.userInfo = this.userSrvc.getUserDetail('ram@gmail.com');
  }

}
