import { UserInfo } from "./user/user-info.model";

export class UserDetailsService {

  userDetail: UserInfo;
  constructor() { }

  private userDetails: UserInfo[] = [
    new UserInfo('Ram', 'Krishna', 'ram@gmail.com', '09-02-2018', 'ISL', 9985959959, '../assets/avatar.jpg', 'Mohan M', 'Bangalore'),
    new UserInfo('Pradeep', 'Chandra', 'pradeep@gmail.com', '09-02-2014', 'Wissen', 7897891011, '../assets/avatar.jpg', 'Mohan M', 'Bangalore'),
    new UserInfo('Shailesh', 'Kumar', 'skumar@gmail.com', '09-03-2018', 'ISL', 9998599912, '../assets/avatar.jpg', 'Mohan M', 'Bangalore'),
    new UserInfo('Pavan', 'Bosale', 'pavan@gmail.com', '05-06-2014', 'Wissen', 8889193911, '../assets/avatar.jpg', 'Mohan M', 'Bangalore')
  ];

  getUserDetail(email: string) {
    this.userDetails.map((detail) => {
      if(detail.email === email)
        this.userDetail = detail;
    });
    return this.userDetail;
  }

}
