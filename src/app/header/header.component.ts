import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() typeSelected = new EventEmitter<string>();
  @Input() name;

  onSelect(searchType: string) {
    this.typeSelected.emit(searchType);
  }

}
