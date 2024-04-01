import { IUser } from "./user.ts";
import { IInstitution } from "./institution.ts";
import { IAccess, adminAccess, instructorAccess, studentAccess } from "./access.tsx";

export type {
    IUser,
    IAccess,
    IInstitution
}

export {
    adminAccess, 
    instructorAccess, 
    studentAccess
}