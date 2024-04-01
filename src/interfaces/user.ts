export interface IInstitution {
    name: string;
    isBosch: boolean;
}

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