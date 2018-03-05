import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidUser: boolean = false;
  returnUrl: string = '';
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['return'] || '/user-search');
  }

  loginUser(uName: string, pwd: string) {
    if (this.auth.checkUserLogin(uName, pwd)) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.invalidUser = true;
    }
  }
}
