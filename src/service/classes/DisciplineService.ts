import {
    IDiscipline,
    IDisciplineGrouped,
    IPaginated
} from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class DisciplineService extends BaseService {
    getDisciplines = async(
        page: string
    ): Promise<IPaginated<IDisciplineGrouped>> => {

        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/discipline",
                { },
                { page: page, limit: 9999 }
            )
        );

        return response.data;
    };

    createDiscipline = async(data: any): Promise<IDiscipline> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/discipline",
                { },
                { }
            ),
            data
        );

        return response.data;
    };

    updateDiscipline = async(
        idDiscipline: string,
        data: any
    ): Promise<IDiscipline> => {

        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/discipline/:idDiscipline",
                { idDiscipline: idDiscipline },
                { }
            ),
            data
        );

        return response.data;
    };

    deleteDiscipline = async(idDiscipline: string): Promise<void> => {
        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/discipline/:idDiscipline",
                { idDiscipline: idDiscipline },
                { }
            )
        );

        return response.data;
    };
}

export { DisciplineService };