import { FieldValues } from "react-hook-form";
import ETSystemService from "../instances/ETSystem";

export const retrieveStudentGroups = (filters:Record<string, string | number>) => ETSystemService.request(
    "get",
    "/studentGroup",
    { },
    filters,
    { enabled: false }
)

export const createStudentGroup = (data:FieldValues) => ETSystemService.request(
    "post",
    "/studentGroup",
    data,
    { },
    {
        enabled: true,
        message: "Student group created"
    }
)

export const retrieveStudentGroup = (idStudentGroup:string) => ETSystemService.request(
    "get",
    "/studentGroup/" + idStudentGroup,
    { },
    { },
    { enabled: false }
)

export const updateStudentGroup = (idStudentGroup:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/studentGroup/" + idStudentGroup,
    data,
    { },
    {
        enabled: true,
        message: "Student group updated"
    }
)

export const deleteStudentGroup = (idStudentGroup:string) => ETSystemService.request(
    "delete",
    "/studentGroup/" + idStudentGroup,
    { },
    { },
    {
        enabled: true,
        message: "Student group deleted"
    }
)