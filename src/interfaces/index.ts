import IAccess from "./access/access.ts"
import { 
    IUser,
    IUserGrouped
} from "./user.ts";
import {
    IInstitution
} from "./institution.ts";
import {
    IPaginated
} from "./paginated.ts";
import {
    studentAccess,
    adminAccess,
    instructorAccess
} from "./access/loggedUserAcess.tsx";
import {
    adminDisciplinesAccess,
    adminInstitutionsAccess,
    adminInstructorsAccess,
    adminStudentsAccess,
    adminUsersAccess
} from "./access/adminAccess.tsx";


export type {
    IUser,
    IUserGrouped,
    IAccess,
    IInstitution,
    IPaginated
}

export {
    adminAccess, 
    instructorAccess, 
    studentAccess,
    adminDisciplinesAccess,
    adminInstitutionsAccess,
    adminInstructorsAccess,
    adminStudentsAccess,
    adminUsersAccess,
}