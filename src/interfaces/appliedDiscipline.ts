import { ICompetenceGroup } from "./competenceGroup";

export interface IAppliedDisciplineGrouped {
    idAppliedDiscipline: string;
    idDiscipline: string;
    idStudentGroup: string;
    idInstructor: string;
    disciplineName: string
    period: number;
    totalHours: number;
    isComplete: boolean;
}

export interface IAppliedDiscipline {
    idAppliedDiscipline: string;
    idDiscipline: string;
    idStudentGroup: string;
    idInstructor: string;
    period: number;
    totalHours: number;
    isComplete: boolean;
    competenceGroups: ICompetenceGroup[];
}