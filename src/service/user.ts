import api from './api.ts'

export const getUser = async (idUser:string, token:string) => {
    try {
        const response = await api.get(`/user/${idUser}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error("User not found")
    }
}