import { ETSystemAPI } from "./APIs";
import { AppliedDisciplineService, CompetenceGroupService, CompetenceService, DisciplineCategoryService, DisciplineService, InstitutionService, InstructorService, LoginService, StudentAvaliationService, StudentGroupService } from "./classes";

const loginService = new LoginService(ETSystemAPI);
const institutionService = new InstitutionService(ETSystemAPI);
const studentGroupService = new StudentGroupService(ETSystemAPI);
const disciplineCategoryService = new DisciplineCategoryService(ETSystemAPI);
const disciplineService = new DisciplineService(ETSystemAPI);
const competenceService = new CompetenceService(ETSystemAPI);
const competenceGroupService = new CompetenceGroupService(ETSystemAPI);
const appliedDisciplineService = new AppliedDisciplineService(ETSystemAPI);
const instructorService = new InstructorService(ETSystemAPI);
const studentAvaliationService = new StudentAvaliationService(ETSystemAPI);

export {
    loginService,
    institutionService,
    studentGroupService,
    disciplineCategoryService,
    disciplineService,
    competenceService,
    competenceGroupService,
    appliedDisciplineService,
    instructorService,
    studentAvaliationService
};