import { ETSystemAPI } from "./APIs";
import { DisciplineCategoryService, InstitutionService, LoginService, StudentGroupService, UserService } from "./classes";

const loginService = new LoginService(ETSystemAPI);
const userService = new UserService(ETSystemAPI);
const institutionService = new InstitutionService(ETSystemAPI);
const studentGroupService = new StudentGroupService(ETSystemAPI);
const disciplineCategoryService = new DisciplineCategoryService(ETSystemAPI);

export {
    loginService,
    userService,
    institutionService,
    studentGroupService,
    disciplineCategoryService
};