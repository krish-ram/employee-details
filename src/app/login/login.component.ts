import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidUser: boolean = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(uName: string, pwd: string) {
    if (this.auth.checkUserLogin(uName, pwd)) {
      this.router.navigate(['/user-search']);
    } else {
      this.invalidUser = true;
    }
  }
}
