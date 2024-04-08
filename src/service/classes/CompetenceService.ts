import { ICompetence } from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class CompetenceService extends BaseService {
    createCompetence = async(
        idCompetenceGroup: string,
        data: any
    ): Promise<ICompetence> => {

        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/competence/competenceGroup/:idCompetenceGroup",
                { idCompetenceGroup: idCompetenceGroup },
                { }
            ),
            data
        );
        
        return response.data;
    };

    updateCompetence = async(
        idCompetence: string,
        data: any
    ): Promise<ICompetence> => {

        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/competence/:idCompetence",
                { idCompetence: idCompetence },
                { }
            ),
            data
        );

        return response.data;
    };

    deleteCompetence = async(idCompetence: string): Promise<void> => {
            this.manager.setAuth();
            const response = await this.manager.delete(
                new EndpointOptions(
                    "/competence/:idCompetence",
                    { idCompetence: idCompetence },
                    { }
                )
            );

            return response.data;
    };
}

export { CompetenceService };