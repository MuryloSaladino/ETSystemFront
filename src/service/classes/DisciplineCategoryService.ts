import {
    IDisciplineCategory,
    IPaginated
} from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class DisciplineCategoryService extends BaseService {
    getDisciplineCategories = async(): 
        Promise<IPaginated<IDisciplineCategory>> => {

        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/disciplineCategory",
                { },
                { page: 1, limit: 9999 }
            )
        );

        return response.data;
    };

    createDisciplineCategory = async(
        data: any
    ): Promise<IDisciplineCategory> => {

        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/disciplineCategory",
                { },
                { }
            ),
            data
        );

        return response.data;
    };

    updateDisciplineCategory = async(
        idDisciplineCategory: string,
        data: any
    ): Promise<IDisciplineCategory> => {

        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/disciplineCategory/:idDisciplineCategory",
                { idDisciplineCategory: idDisciplineCategory },
                { }
            ),
            data
        );

        return response.data;
    };

    deleteDisciplineCategory = async(
        idDisciplineCategory: string
    ): Promise<void> => {

        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/disciplineCategory/:idDisciplineCategory",
                { idDisciplineCategory: idDisciplineCategory },
                { }
            )
        );

        return response.data;
    };
}

export { DisciplineCategoryService };