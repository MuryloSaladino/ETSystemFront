import { LoginService } from "./classes"
import api from "./api"

const loginService = new LoginService(api);

export default loginService;