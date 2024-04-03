import { IInstitution } from "./institution";

export interface IAdministrator {
    isMaster: boolean;
    idAdministrator: string;
}
export interface IStudent {
    idStudent: string;
}
export interface IInstructor {
    idInstructor: string;
}

export interface IUser {
    idUser: string;
    username: string;
    name: string | null;
    email: string | null;
    contact: string | null;
    dateOfBirth: string | null;
    instructor: IInstructor | null;
    student: IStudent | null;
    administrator: IAdministrator | null;
    institution: IInstitution;
}

export interface IUserGrouped {
    idUser: string;
    username: string;
    name: string | null;
    email: string | null;
    dateOfBirth: string | null;
    contact: string | null;
    idAdministrator: string | null;
    idInstructor: string | null;
    idStudent: string | null;
}