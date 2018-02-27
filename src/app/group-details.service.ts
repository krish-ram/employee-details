import { GroupInfo } from "./group/group-info.model";
import { UserList } from "./shared/user-list.model";

export class GroupDetailsService {

    constructor() { }

    private groupDetails: GroupInfo[] = [
        new GroupInfo('angular-dev', 'Angular Developers', 'ram@gmail.com', '01-11-2017', [new UserList('Ram Krishna', 'ram@gmail.com')],
            [new UserList('Ram Krishna', 'ram@gmail.com'), new UserList('Shailesh Kumar', 'skumar@gmail.com'), new UserList('Pavan Bhosale', 'pavan@gmail.com')]),
        new GroupInfo('vue-dev', 'VueJS Developers', 'pradeep@gmail.com', '02-10-2017', [new UserList('Pradeep Krishna', 'pradeep@gmail.com')],
            [new UserList('Shailesh Kumar', 'skumar@gmail.com'), new UserList('Pradeep Chandra', 'pradeep@gmail.com'), new UserList('Pavan Bhosale', 'pavan@gmail.com')]),
        new GroupInfo('react-dev', 'ReactJS Developers', 'pavan@gmail.com', '03-09-2017', [new UserList('Pavan Bosale', 'pavan@gmail.com')],
            [new UserList('Ram Krishna', 'ram@gmail.com'), new UserList('Pradeep Chandra', 'pavan@gmail.com'), new UserList('Pavan Bhosale', 'pavan@gmail.com')]),
        new GroupInfo('python-dev', 'Python Developers', 'skumar@gmail.com', '04-08-2017', [new UserList('Shailesh Kumar', 'skumar@gmail.com')],
            [new UserList('Ram Krishna', 'ram@gmail.com'), new UserList('Pradeep Chandra', 'pradeep@gmail.com'), new UserList('Shailesh Kumar', 'skumar@gmail.com')])
    ];

    getGroupsList = function () {
        return this.groupDetails.slice();
    }

    getGroupDetail = function (groupName: string) {
        let groupData: GroupInfo;
        this.groupDetails.map((detail) => {
            if (detail.groupName === groupName) {
                groupData = detail;
            }
            return detail;
        });
        return groupData;
    }

    removeMember = function (email: string, groupName: string) {
        let memberData: UserList[];
        this.groupDetails.map((detail) => {
            if (detail.groupName === groupName) {
                detail.memberList = detail.memberList.filter((member) => {
                    if (member.userEmail != email) {
                        return member;
                    }
                });
                memberData = detail.memberList;
            }
            return detail;
        });
        return memberData;
    }


}
