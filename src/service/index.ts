import { ETSystemAPI } from "./APIs";
import { InstitutionService, LoginService, UserService } from "./classes";

const loginService = new LoginService(ETSystemAPI);
const userService = new UserService(ETSystemAPI);
const institutionService = new InstitutionService(ETSystemAPI)

export {
    loginService,
    userService,
    institutionService
};