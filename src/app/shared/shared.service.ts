import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserList } from './user-list.model';


@Injectable()
export class SharedService {
    public loggedInUser: Subject<UserList> = new Subject<UserList>();
}