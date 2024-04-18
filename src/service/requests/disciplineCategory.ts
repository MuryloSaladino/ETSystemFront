import { FieldValues } from "react-hook-form";
import ETSystemService from "../services/ETSystem";

export const retrieveDisciplineCategories = (filters:Record<string, string | number>) => ETSystemService.request(
    "get",
    "/disciplineCategory",
    { },
    filters,
    { enabled: false }
) 

export const createDisciplineCategory = (data:FieldValues) => ETSystemService.request(
    "post",
    "/disciplineCategory",
    data,
    { },
    {
        enabled: true,
        message: "Category created"
    }
)

export const updateDisciplineCategory = (idDisciplineCateory:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/disciplineCategory/" + idDisciplineCateory,
    data,
    { },
    {
        enabled: true,
        message: "Category updated"
    }
)

export const deleteDisciplineCategory = (idDisciplineCateory:string) => ETSystemService.request(
    "delete",
    "/disciplineCategory/" + idDisciplineCateory,
    { },
    { },
    {
        enabled: true,
        message: "Category deleted"
    }
)