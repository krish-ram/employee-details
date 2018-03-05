import { UserList } from "./shared/user-list.model";
import { Injectable } from "@angular/core";
import { UserDetailsService } from "./user-details.service";
import { Observable } from "rxjs/Observable";
import { SharedService } from "./shared/shared.service";

@Injectable()
export class AuthService {
    constructor(private userDetails: UserDetailsService, private sharedSrvc: SharedService) { };

    private loggedInUser: UserList;

    getLogIn() {

        if (this.loggedInUser && this.loggedInUser.userEmail) {
            this.sharedSrvc.setLoggedInUser(this.loggedInUser);
        }

    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    if (this.loggedInUser && this.loggedInUser.userEmail)
                        resolve(true);
                    else
                        resolve(false);
                }, 800);
            }
        );
        return promise;
    }


    login() {

    }

    logout() {

    }

    checkUserLogin(userName: string, pwd: string) {
        let userDetail = this.userDetails.getUserDetail(userName);
        if (userDetail && userDetail.email) {
            this.loggedInUser = new UserList(userDetail.firstName + " " + userDetail.lastName, userDetail.email);
            this.sharedSrvc.setLoggedInUser(this.loggedInUser)
            return true;
        }
        return false;
    }
}
