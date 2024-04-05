// import { IPaginated } from '../interfaces/paginated.ts'
// import { IUser, IUserGrouped } from '../interfaces/user.ts'
import { UserService } from './BaseService';
import api from './api.ts'

const userService = new UserService(api);

export default userService;

// export const getUsers = async (token:string, page:string):Promise<IPaginated<IUserGrouped>> => {
//     try {
//         const response = await api.get(`/user?page=${page}&limit=10`, {
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             }
//         })
//         return response.data
//     } catch (error) {
//         throw new Error()
//     }
// }

// export const getUser = async (idUser:string, token:string):Promise<IUser> => {
//     try {
//         const response = await api.get(`/user/${idUser}`, {
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             }
//         })
//         return response.data
//     } catch (error) {
//         throw new Error()
//     }
// }

// export const updateUser = async (idUser:string, token:string, data:any):Promise<IUser> => {
//     try {
//         const response = await api.patch("/user/"+idUser, data, {
//             headers: {
//                 "Authorization": "Bearer " + token
//             }
//         })
//         return response.data
//     } catch (error) {
//         throw new Error()
//     }
// }