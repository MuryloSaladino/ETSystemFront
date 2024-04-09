import {
    IAppliedDiscipline,
    IAppliedDisciplineGrouped,
    IPaginated
} from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class AppliedDisciplineService extends BaseService {
    getAppliedDisciplines = async(
        page: string
    ): Promise<IPaginated<IAppliedDisciplineGrouped>> => {

        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/appliedDiscipline",
                { },
                { page: page, limit: 1000 }
            )
        );

        return response.data;
    };

    createAppliedDiscipline = async(
        data: any
    ): Promise<IAppliedDisciplineGrouped> => {

        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/appliedDiscipline",
                { },
                { }
            ),
            data
        );

        return response.data;
    };

    getAppliedDiscipline = async(
        idAppliedDiscipline: string
    ): Promise<IAppliedDiscipline> => {

        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/appliedDiscipline/:idAppliedDiscipline",
                { idAppliedDiscipline: idAppliedDiscipline },
                { }
            )
        );

        return response.data;
    };

    updateAppliedDiscipline = async(
        idAppliedDiscipline: string,
        data: any
    ): Promise<IAppliedDisciplineGrouped> => {

        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/appliedDiscipline/:idAppliedDiscipline",
                { idAppliedDiscipline: idAppliedDiscipline },
                { }
            ),
            data
        );

        return response.data;
    };

    deleteAppliedDiscipline = async(
        idAppliedDiscipline: string
    ): Promise<void> => {

        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/appliedDiscipline/:idAppliedDiscipline",
                { idAppliedDiscipline: idAppliedDiscipline },
                { }
            ),
        );

        return response.data;
    }
}

export { AppliedDisciplineService };