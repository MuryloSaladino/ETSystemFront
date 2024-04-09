import { ETSystemAPI } from "./APIs";
import { AppliedDisciplineService, CompetenceGroupService, CompetenceService, DisciplineCategoryService, DisciplineService, InstitutionService, LoginService, StudentGroupService, UserService } from "./classes";

const loginService = new LoginService(ETSystemAPI);
const userService = new UserService(ETSystemAPI);
const institutionService = new InstitutionService(ETSystemAPI);
const studentGroupService = new StudentGroupService(ETSystemAPI);
const disciplineCategoryService = new DisciplineCategoryService(ETSystemAPI);
const disciplineService = new DisciplineService(ETSystemAPI);
const competenceService = new CompetenceService(ETSystemAPI);
const competenceGroupService = new CompetenceGroupService(ETSystemAPI);
const appliedDisciplineService = new AppliedDisciplineService(ETSystemAPI);

export {
    loginService,
    userService,
    institutionService,
    studentGroupService,
    disciplineCategoryService,
    disciplineService,
    competenceService,
    competenceGroupService,
    appliedDisciplineService,
};