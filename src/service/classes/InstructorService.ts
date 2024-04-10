import { IInstructor } from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class InstructorService extends BaseService {
    getInstructor = async(): Promise<IInstructor[]> => {
        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/instructor",
                { },
                { }
            )
        );

        return response.data;
    };
}

export { InstructorService };