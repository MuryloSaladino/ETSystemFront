import { IPaginated, IUser, IUserGrouped } from "../../interfaces";
import { EndpointOptions } from "../RequestsManager";
import { BaseService } from "./BaseService";

class UserService extends BaseService {
    getUsers = async(page: number): Promise<IPaginated<IUserGrouped>> => {
        const response = await this.manager.get(new EndpointOptions(
            "/user",
            { },
            { page: page, limit: 10 }
        ));
        return response.data;
    };

    getUser = async(idUser: string): Promise<IUser> => {
        const response = await this.manager.get(new EndpointOptions(
            "/user/:idUser",
            { idUser: idUser },
            { }
        ));
        return response.data;
    };

    updateUser = async(idUser: string, data: any): Promise<IUser> => {
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
}

export { UserService };