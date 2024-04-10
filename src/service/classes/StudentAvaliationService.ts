import {
    IStudentAvaliation,
    IStudentAvaliationGrouped
} from "../../interfaces";
import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class StudentAvaliationService extends BaseService {
    getStudentAvaliations = async(
        idAppliedDiscipline: string
    ): Promise<IStudentAvaliationGrouped[]> => {

        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/studentAvaliation/appliedDiscipline/:idAppliedDiscipline",
                { idAppliedDiscipline: idAppliedDiscipline },
                { }
            )
        );

        return response.data;
    };

    getStudentAvaliationsOfStudent = async(
        idAppliedDiscipline: string,
        idStudent: string
    ): Promise<IStudentAvaliation> => {

        this.manager.setAuth();
        const response = await this.manager.get(
            new EndpointOptions(
                "/studentAvaliation/appliedDiscipline/:idAppliedDiscipline/student/:idStudent",
                {
                    idAppliedDiscipline: idAppliedDiscipline,
                    idStudent: idStudent
                },
                { }
            )
        );

        return response.data;
    };

    createStudentAvaliation = async(
        idAppliedDiscipline: string,
        idStudent: string,
        data: any
    ): Promise<void> => {

        this.manager.setAuth();
        const response = await this.manager.post(
            new EndpointOptions(
                "/studentAvaliation/appliedDiscipline/:idAppliedDiscipline/student/:idStudent",
                {
                    idAppliedDiscipline: idAppliedDiscipline,
                    idStudent: idStudent
                },
                { }
            ),
            data
        );

        return response.data;
    };

    deletestudentAvaliation = async(
        idStudentAvaliation: string
    ): Promise<void> => {

        this.manager.setAuth();
        const response = await this.manager.delete(
            new EndpointOptions(
                "/studentAvaliation/:idStudentAvaliation",
                { idStudentAvaliation: idStudentAvaliation },
                { }
            )
        );

        return response.data;
    }
}

export { StudentAvaliationService };