import {
    IPaginated,
    IStudentGroup,
    IStudentGroupGrouped
} from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class StudentGroupService extends BaseService {
    getStudentGroups = async(
        wperiod: string,
        year: number,
        page: number
    ): Promise<IPaginated<IStudentGroupGrouped>> => {

        this.manager.setAuth();
        const response = await this.manager.get(new EndpointOptions(
            "/studentGroup",
            { },
            {
                page: page,
                limit: 10,
                wperiod: wperiod,
                year: year
            }
        ));

        return response.data;
    };

    createStudentGroup = async(data: any): Promise<IStudentGroup> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/studentGroup",
                { },
                { }
            ),
            data
        );

        return response.data;
    };

    getStudentGroup = async(idStudentGroup: string): Promise<IStudentGroup> => {
        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/studentGroup/:idStudentGroup",
                { idStudentGroup: idStudentGroup },
                { }
            )
        );

        return response.data;
    };

    updateStudentGroup = async(
        idStudentGroup: string,
        data: any
    ): Promise<IStudentGroup> => {

        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/studentGroup/:idStudentGroup",
                { idStudentGroup: idStudentGroup },
                { }
            ),
            data
        );

        return response.data;
    };

    deleteStudentGroup = async(idStudentGroup: string): Promise<void> => {
        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/studentGroup/:idStudentGroup",
                { idStudentGroup: idStudentGroup },
                { }
            )
        );

        return response.data;
    };
}

export { StudentGroupService };