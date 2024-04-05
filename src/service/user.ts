import { UserService } from './classes';
import api from './api.ts'

const userService = new UserService(api);

export default userService;