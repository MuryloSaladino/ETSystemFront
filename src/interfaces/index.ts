import { IUser, IUserGrouped } from "./user.ts";
import { IInstitution } from "./institution.ts";
import IAccess from "./access"
import { IPaginated } from "./paginated.ts";
import { studentAccess, adminAccess, instructorAccess } from "./access/loggedUserAcess.tsx";


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
    studentAccess
}