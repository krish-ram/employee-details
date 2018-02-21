import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName: string = "Ram";
  selectedType: string = 'user';
  userEmail: string = "krishram@gmail.com"

  onNavigate(val: string) {
    this.selectedType = val;
  }
}
 