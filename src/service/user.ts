import { IUser } from '../interfaces/user.ts'
import api from './api.ts'


export const getUsers = async (token:string):Promise<IUser[]> => {
    try {
        const response = await api.get(`/user`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error()
    }
}

export const getUser = async (idUser:string, token:string):Promise<IUser> => {
    try {
        const response = await api.get(`/user/${idUser}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error()
    }
}

export const updateUser = async (idUser:string, token:string, data:any):Promise<IUser> => {
    try {
        const response = await api.patch("/user/"+idUser, data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        return response.data
    } catch (error) {
        throw new Error()
    }
}