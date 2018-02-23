import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html', 
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  @Input() groups;
  cols: any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'groupName', header: "Group Name"},
      { field: 'groupDesc', header: "Group Description"}
    ];
  }

}
