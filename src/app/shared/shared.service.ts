import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserList } from './user-list.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SharedService {
    public loggedInUser: Subject<UserList> = new Subject<UserList>();

    setLoggedInUser(user: UserList) {
        this.loggedInUser.next(user);
    }

    getLoggedInUser(): Observable<any> {
        return this.loggedInUser.asObservable();
    }
}