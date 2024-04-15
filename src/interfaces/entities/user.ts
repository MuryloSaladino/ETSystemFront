import { IInstitution } from "./institution";

export interface IAdministrator {
    isMaster: boolean;
    idAdministrator: string;
}
export interface IStudent {
    idStudent: string;
    idStudentGroup: string;
}
export interface IInstructor {
    idInstructor: string;
    username: string;
    name: string | null;
}

interface IUserBase {
    idUser: string;
    username: string;
    name: string | null;
    email: string | null;
    contact: string | null;
    dateOfBirth: string | null;
}

export interface IUser extends IUserBase {
    instructor: IInstructor | null;
    student: IStudent | null;
    administrator: IAdministrator | null;
    institution: IInstitution;
}

export interface IUserGrouped extends IUserBase {
    idAdministrator: string | null;
    idInstructor: string | null;
    idStudent: string | null;
}