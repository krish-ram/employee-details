import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared/shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() typeSelected = new EventEmitter<string>();
  name: string;
  sub: Subscription;
  constructor(private auth: AuthService, private sharedSrvc: SharedService) { };

  onSelect(searchType: string) {
    this.typeSelected.emit(searchType);
  }

  ngOnInit() {
    this.sub = this.sharedSrvc.getLoggedInUser().subscribe((user: any) => {
      if (user && user.userName)
        this.name = user.userName;
    });
  }


}
