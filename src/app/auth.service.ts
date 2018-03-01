import { UserList } from "./shared/user-list.model";
import { Injectable } from "@angular/core";
import { UserDetailsService } from "./user-details.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    constructor(private userDetails: UserDetailsService) { };

    private loggedInUser: UserList;

    getLogIn(): Observable<UserList> {

        return Observable.create(observer => {
            if (this.loggedInUser && this.loggedInUser.userEmail) {
                observer.next(this.loggedInUser);
                observer.complete();
            } else {
                observer.next({});
                observer.complete();
            }
        });
    }

    logout() {

    }

    checkUserLogin(userName: string, pwd: string) {
        let userDetail = this.userDetails.getUserDetail(userName);
        if (userDetail && userDetail.email) {
            this.loggedInUser = new UserList(userDetail.firstName + userDetail.lastName, userDetail.email);
            return true;
        }
        return false;
    }
}
