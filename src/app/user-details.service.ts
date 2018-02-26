import { UserInfo } from "./user/user-info.model";
import { UserGroup } from "./user/user-group.model";
import { UserList } from "./shared/user-list.model";

export class UserDetailsService {

  //  userDetail: UserInfo;
  constructor() { }

  private userDetails: UserInfo[] = [
    new UserInfo('Ram', 'Krishna', 'ram@gmail.com', '09-02-2018', 'ISL', 9985959959, '../assets/avatar.jpg', 'Mohan M', 'Bangalore',
      [new UserGroup('angular-dev', 'Angular Developers'), new UserGroup('react-dev', 'React Developers'),
      new UserGroup('vue-dev', 'VueJS Developers'), new UserGroup('python-dev', 'Python Developers')]),
    new UserInfo('Pradeep', 'Chandra', 'pradeep@gmail.com', '09-02-2014', 'Wissen', 7897891011, '../assets/avatar.jpg', 'Mohan M', 'Bangalore',
      [new UserGroup('angular-dev', 'Angular Developers'), new UserGroup('react-dev', 'React Developers'),
      new UserGroup('vue-dev', 'VueJS Developers'), new UserGroup('python-dev', 'Python Developers')]),
    new UserInfo('Shailesh', 'Kumar', 'skumar@gmail.com', '09-03-2018', 'ISL', 9998599912, '../assets/avatar.jpg', 'Mohan M', 'Bangalore',
      [new UserGroup('angular-dev', 'Angular Developers'), new UserGroup('react-dev', 'React Developers'),
      new UserGroup('vue-dev', 'VueJS Developers'), new UserGroup('python-dev', 'Python Developers')]),
    new UserInfo('Pavan', 'Bosale', 'pavan@gmail.com', '05-06-2014', 'Wissen', 8889193911, '../assets/avatar.jpg', 'Mohan M', 'Bangalore',
      [new UserGroup('angular-dev', 'Angular Developers'), new UserGroup('react-dev', 'React Developers'),
      new UserGroup('vue-dev', 'VueJS Developers'), new UserGroup('python-dev', 'Python Developers')])
  ];

  getUserDetail(email: string) {
    let userDetail: UserInfo;

    this.userDetails.map((detail) => {
      if (detail.email === email) {
        userDetail = detail;
      }
      return detail;
    });
    return userDetail;
  }

  getGroupDetails(email: string) {
    let userGroups: UserGroup[];
    this.userDetails.map((detail) => {
      if (detail.email === email) {
        console.log(detail);
        userGroups = detail.userGroups;
      }
      return detail;
    });
    return userGroups;
  }

  getUserList() {
    let userList: UserList[] = [];
    this.userDetails.map((detail) => {
      let user = new UserList('', '');
      user.userName = detail.firstName + ' ' + detail.lastName;
      user.userEmail = detail.email;
      userList.push(user);
      return detail;
    });
    return userList;
  }

}
