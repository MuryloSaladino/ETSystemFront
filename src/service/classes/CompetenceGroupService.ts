import { ICompetenceGroup } from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class CompetenceGroupService extends BaseService {
    createCompetenceGroup = async(
        idAppliedDiscipline: string,
        data: any
    ): Promise<ICompetenceGroup> => {

        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/competenceGroup/appliedDiscipline/:idAppliedDiscipline",
                { idAppliedDiscipline: idAppliedDiscipline },
                { }
            ),
            data
        );

        return response.data;
    }

    updateCompetenceGroup = async(
        idCompetenceGroup: string,
        data: any
    ): Promise<ICompetenceGroup> => {

        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/competenceGroup/:idCompetenceGroup",
                { idCompetenceGroup: idCompetenceGroup },
                { }
            ),
            data
        );

        return response.data;
    };

    deleteCompetenceGroup = async(
        idCompetenceGroup: string
    ): Promise<ICompetenceGroup> => {

        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/competenceGroup/:idCompetenceGroup",
                { idCompetenceGroup: idCompetenceGroup },
                { }
            )
        );

        return response.data;
    };
}

export { CompetenceGroupService }