import { IUser, IUserGrouped } from "./user.ts";
import { IInstitution } from "./institution.ts";
import { IAccess, adminAccess, instructorAccess, studentAccess } from "./access.tsx";
import { IPaginated } from "./paginated.ts";


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