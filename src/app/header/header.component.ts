import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() typeSelected = new EventEmitter<string>();
  name: string;
  constructor(private auth: AuthService) { };

  onSelect(searchType: string) {
    this.typeSelected.emit(searchType);
  }

  ngOnInit() {
    this.name = this.auth.getLogIn().userName;
  }

}
