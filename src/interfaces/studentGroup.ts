import { IStudent } from "./user";

export interface IStudentGroup {
    idStudentGroup: string;
    name: string;
    dateOfStart: string;
    dateOfFinish: string | null;
    workPeriod: string;
    students: IStudent[] | null;
}

export interface IStudentGroupGrouped {
    idStudentGroup: string;
    name: string;
    dateOfStart: string;
    dateOfFinish: string | null;
    workPeriod: string;
}