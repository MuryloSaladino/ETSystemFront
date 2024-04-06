import { InstitutionService } from "./classes";
import api from "./api";

const institutionService = new InstitutionService(api);

export default institutionService;