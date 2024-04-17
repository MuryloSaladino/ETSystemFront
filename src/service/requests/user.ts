import { FieldValues } from "react-hook-form";
import ETSystemService from "../services/ETSystem";


export const createUser = (data:FieldValues) => ETSystemService.request(
    "post",
    "/user",
    data,
    { },
    {
        enabled: true,
        message: "User created." 
    }
) 

export const retrieveUser = (idUser:string) => ETSystemService.request(
    "get",
    "/user/" + idUser,
    { },
    { },
    { enabled: false }
)

export const retrieveUsers = (filters:Record<string, string | number>) => ETSystemService.request(
    "get",
    "/user",
    { },
    filters,
    { enabled: false },
)

export const updateUser = (idUser:string, data:FieldValues) => ETSystemService.request(
    "patch",
    "/user/" + idUser,
    data,
    {  },
    { 
        enabled: true,
        message: "User info updated."
    }
)

export const deleteUser = (idUser:string) => ETSystemService.request(
    "delete",
    "/user/" + idUser,
    { },
    { },
    {
        enabled: true,
        message: "User deleted",
    }
)

export const createAdmin = (idUser:string, data:FieldValues) => ETSystemService.request(
    "post",
    `/user/${idUser}/admin`,
    data,
    { },
    { 
        enabled: true,
    }
)

export const createInstructor = (idUser:string) => ETSystemService.request(
    "post",
    `/user/${idUser}/instructor`,
    { },
    { },
    { 
        enabled: true,
    }
)

export const createStudent = (idUser:string, data:FieldValues) => ETSystemService.request(
    "post",
    `/user/${idUser}/student`,
    data,
    { },
    { 
        enabled: true,
        message: "Student created!"
    }
)

export const retrieveInstructors = () => ETSystemService.request(
    "get",
    "/instructor",
    { },
    { },
    { enabled: false }
)