import { FieldValues } from "react-hook-form";
import ETSystemService from "../services/ETSystem";

export const retrieveAppliedDisciplines = (filters:Record<string, string | number>) => ETSystemService.request(
    "get",
    "/appliedDiscipline",
    { },
    filters,
    { enabled: false }
)

export const createAppliedDiscipline = (data:FieldValues) => ETSystemService.request(
    "post",
    "/appliedDiscipline",
    data,
    { },
    {
        enabled: true,
        message: "Discipline applied."
    }
)

export const retrieveAppliedDiscipline = (idAppliedDiscipline:string) => ETSystemService.request(
    "get",
    "/appliedDiscipline/" + idAppliedDiscipline,
    { },
    { },
    { enabled: false }
)

export const updateAppliedDiscipline = (idAppliedDiscipline:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/appliedDiscipline/" + idAppliedDiscipline,
    data,
    { },
    {  
        enabled: true,
        message: "Changes have been saved."
    }
)

export const deleteAppliedDiscipline = (idAppliedDiscipline:string) => ETSystemService.request(
    "delete",
    "/appliedDiscipline/" + idAppliedDiscipline,
    { },
    { },
    {  
        enabled: true,
        message: "Application of discipline has been deleted."
    }
)