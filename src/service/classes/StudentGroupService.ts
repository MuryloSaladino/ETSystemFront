import {
    IPaginated,
    IStudentGroup,
    IStudentGroupGrouped
} from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class StudentGroupService extends BaseService {
    getStudentGroups = async(
        page: string,
        wperiod?: string,
        year?: string,
    ): Promise<IPaginated<IStudentGroupGrouped>> => {

        const options:Record<string, string | number> = {
            page: page,
            limit: 10
        }
        if(wperiod) options.wperiod = wperiod
        if(year) options.year = year

        this.manager.setAuth();
        const response = await this.manager.get(new EndpointOptions(
            "/studentGroup",
            { },
            options
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