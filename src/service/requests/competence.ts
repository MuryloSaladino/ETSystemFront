import { FieldValues } from "react-hook-form";
import ETSystemService from "../instances/ETSystem";

export const createCompetence = (idCompetenceGroup:string, data:FieldValues) => ETSystemService.request(
    "post",
    "/competence/competenceGroup/" + idCompetenceGroup,
    data,
    { },
    { 
        enabled: true,
        message: "Competence created."
    }
)

export const updateCompetence = (idCompetence:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/competence/" + idCompetence,
    data,
    { },
    {
        enabled: true,
        message: "Competence group updated."
    }
)

export const deleteCompetence = (idCompetence:string) => ETSystemService.request(
    "delete",
    "/competence/" + idCompetence,
    { },
    { },
    {
        enabled: true,
        message: "Competence group deleted."
    }
)