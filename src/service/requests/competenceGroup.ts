import { FieldValues } from "react-hook-form";
import ETSystemService from "../instances/ETSystem";

export const createCompetenceGroup = (idAppliedDiscipline:string, data:FieldValues) => ETSystemService.request(
    "post",
    "/competenceGroup/appliedDiscipline/" + idAppliedDiscipline,
    data,
    { },
    { 
        enabled: true,
        message: "Competence group created."
    }
)

export const updateCompetenceGroup = (idCompetenceGroup:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/competenceGroup/" + idCompetenceGroup,
    data,
    { },
    {
        enabled: true,
        message: "Competence group updated."
    }
)

export const deleteCompetenceGroup = (idCompetenceGroup:string) => ETSystemService.request(
    "delete",
    "/competenceGroup/" + idCompetenceGroup,
    { },
    { },
    {
        enabled: true,
        message: "Competence group deleted."
    }
)