import { IInstructorGrouped, IPaginated, IUser, IUserGrouped } from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class UserService extends BaseService {
    getUsers = async(page: number): Promise<IPaginated<IUserGrouped>> => {
        this.manager.setAuth();
        const response = await this.manager.get(new EndpointOptions(
            "/user",
            { },
            { page: page, limit: 10 }
        ));
        return response.data;
    };

    getUser = async(idUser: string): Promise<IUser> => {
        this.manager.setAuth();
        const response = await this.manager.get(new EndpointOptions(
            "/user/:idUser",
            { idUser: idUser },
            { }
        ));
        return response.data;
    };

    createUser = async(data: any): Promise<IUser> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/user",
                { },
                { }
            ),
            data
        );
        return response.data;
    };

    updateUser = async(idUser: string, data: any): Promise<IUser> => {
        this.manager.setAuth();
        const response = await this.manager.patch<any>(
            new EndpointOptions(
                "/user/:idUser",
                { idUser: idUser },
                { }
            ),
            data
        );
        return response.data;
    };

    deleteUser = async(idUser: string): Promise<void> => {
        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/user/:idUser",
                { idUser: idUser },
                { }
            )
        );
        return response.data;
    };

    createAdmin = async(idUser: string, data: any): Promise<IUser> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/user/:idUser/admin",
                { idUser: idUser },
                { }
            ),
            data
        );
        return response.data;
    };

    createInstructor = async(idUser: string, data: any): Promise<IUser> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/user/:idUser/instructor",
                { idUser: idUser },
                { }
            ),
            data
        );
        return response.data;
    };

    createStudent = async(idUser: string, data: any): Promise<IUser> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/user/:idUser/student",
                { idUser: idUser },
                { }
            ),
            data
        );
        return response.data;
    };

    getInstructors = async(): Promise<IInstructorGrouped[]> => {
        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/instructor",
                { },
                { }
            )
        );
        return response.data;
    };
}

export { UserService };