import { IInstitution } from "./institution";

export interface IUser {
    idUser: string;
    username: string;
    name: string | null;
    email: string | null;
    contact: string | null;
    dateOfBirth: string | null;
    idInstructor: boolean;
    idStudent: boolean;
    idAdministrator: boolean;
    institution: IInstitution;
}

export interface IUserGrouped {
    idUser: string;
    username: string;
    name: string;
    email: string;
    dateOfBirth: string;
    contact: string;
}