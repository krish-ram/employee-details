import { UserList } from "../shared/user-list.model";

export class GroupInfo {
    constructor(
        public groupName: string,
        public groupDesc: string,
        public createdBy: string,
        public createdOn: string,
        public adminList: UserList[],
        public memberList: UserList[]
    ) { }
} 