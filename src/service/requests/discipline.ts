import { FieldValues } from "react-hook-form";
import ETSystemService from "../instances/ETSystem";

export const retrieveDisciplines = (filters:Record<string, string | number>) => ETSystemService.request(
    "get",
    "/discipline",
    { },
    filters,
    { enabled: false }
) 

export const createDiscipline = (data:FieldValues) => ETSystemService.request(
    "post",
    "/discipline",
    data,
    { },
    {
        enabled: true,
        message: "Discipline created"
    }
)

export const updateDiscipline = (idDiscipline:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/discipline/" + idDiscipline,
    data,
    { },
    {
        enabled: true,
        message: "Discipline updated"
    }
)

export const deleteDiscipline = (idDiscipline:string) => ETSystemService.request(
    "delete",
    "/discipline/" + idDiscipline,
    { },
    { },
    {
        enabled: true,
        message: "Discipline deleted"
    }
)