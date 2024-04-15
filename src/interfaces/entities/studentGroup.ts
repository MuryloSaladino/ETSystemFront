export interface IStudentGroup {
    idStudentGroup: string;
    name: string;
    dateOfStart: string;
    dateOfFinish: string | null;
    workPeriod: string;
    students: IStudentResponseStudentGroup[];
}

export type IStudentGroupGrouped = Omit<IStudentGroup, "students">

export interface IStudentResponseStudentGroup {
    idUser: string;
    idStudent: string;
    username: string;
}