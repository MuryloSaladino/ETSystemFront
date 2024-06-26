export interface IStudentGroup {
    idStudentGroup: string;
    name: string;
    dateOfStart: string;
    dateOfFinish: string | null;
    workPeriod: string;
    students: IStudentResponseStudentGroup[];
}

export interface IStudentGroupGrouped {
    idStudentGroup: string;
    name: string;
    dateOfStart: string;
    dateOfFinish: string | null;
    workPeriod: string;
}

export interface IStudentResponseStudentGroup {
    idUser: string;
    idStudent: string;
    username: string;
}