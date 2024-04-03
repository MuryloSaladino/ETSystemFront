import { IInstitution, IPaginated } from "../interfaces";
import api from "./api";

export const getInstitutions = async (token:string, page:string):Promise<IPaginated<IInstitution>> => {
    try {
        const response = await api.get(`/institution?page=${page}&limit=10`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error
    }
}