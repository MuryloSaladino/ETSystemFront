import { IUser } from "./user.ts";
import { IAccess, adminAccess, instructorAccess, studentAccess } from "./access.tsx";

export type {
    IUser,
    IAccess, 
}

export {
    adminAccess, 
    instructorAccess, 
    studentAccess
}