import { ICompetence } from "./competence";

export interface ICompetenceGroup {
    idCompetenceGroup: string;
    description: string;
    competences: ICompetence[];
};