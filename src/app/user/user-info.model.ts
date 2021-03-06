import { UserGroup } from "./user-group.model";

export class UserInfo {
    constructor(
        public firstName: string, 
        public lastName:string, 
        public email: string,
        public doj: string,
        public dept: string,
        public mobile: number,
        public imagePath: string,
        public manager: string,
        public location: string,
        public userGroups: UserGroup[]
    ) {}
}