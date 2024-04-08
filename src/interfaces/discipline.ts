import { IDisciplineCategory } from "./disciplineCategory";

export interface IDiscipline {
    idDiscipline: string;
    name: string;
    category: IDisciplineCategory;
};

export interface IDisciplineGrouped {
    idDiscipline: string;
    name: string;
};