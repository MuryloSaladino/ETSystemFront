import { IPaginated, IInstitution } from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class InstitutionService extends BaseService {
    getInstitutions = async(page: string): Promise<IPaginated<IInstitution>> => {
        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/institution",
                {  },
                { page: page, limit: 10 }
            )
        );
        
        return response.data;
    };

    createInstitution = async(data: any): Promise<IInstitution> => {
        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/institution",
                { },
                { }
            ),
            data
        );
        
        return response.data;
    };

    updateInstitution = async(idInstitution: string, data: any): Promise<IInstitution> => {
        this.manager.setAuth();
        const response = await this.manager.patch(
            new EndpointOptions(
                "/institution/:idInstitution",
                { idInstitution: idInstitution },
                { }
            ),
            data
        );
        
        return response.data;
    };

    deleteInstitution = async(idInstitution: string): Promise<IInstitution> => {
        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/institution/:idInstitution",
                { idInstitution: idInstitution },
                { }
            )
        );

        return response.data;
    };
}

export { InstitutionService };