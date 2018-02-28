import { UserList } from "./shared/user-list.model";


export class AuthService {
    private loggedInUser: UserList = new UserList('Ram Krishna', 'ram@gmail.com');

    getLogIn() {
        return this.loggedInUser;
    }

    logout() {

    }
}
