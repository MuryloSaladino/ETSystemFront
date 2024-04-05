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
            { page: page, limit: 10 }
        ));
        return response.data;
    };
}