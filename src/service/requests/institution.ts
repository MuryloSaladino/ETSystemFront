import { FieldValues } from "react-hook-form";
import ETSystemService from "../instances/ETSystem";


export const retrieveInstitutions = (filters:Record<string, string | number>) => ETSystemService.request(
    "get",
    "/institution",
    { },
    filters,
    { enabled: false }
)

export const createInstitution = (data:FieldValues) => ETSystemService.request(
    "post",
    "/institution",
    data,
    { },
    { 
        enabled: true,
        message: "Institution created." 
    }
)

export const updateInstitution = (idInstitution:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/institution/" + idInstitution,
    data,
    { },
    {
        enabled: true,
        message: "Info has been updated."
    }
)

export const deleteInstitution = (idInstitution:string) => ETSystemService.request(
    "delete",
    "/institution/" + idInstitution,
    { },
    { },
    {
        enabled: true,
        message: "Institution deleted."
    }
)