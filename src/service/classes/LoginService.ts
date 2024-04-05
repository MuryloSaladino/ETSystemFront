import { EndpointOptions } from "./RequestsManager";
import { BaseService } from "./BaseService";

class LoginService extends BaseService {
    login = async(username: string, password: string) => {
        const response = await this.manager.post(
            new EndpointOptions(
                "/login",
                {  },
                {  }
            ),
            {
                username: username,
                password: password
            }
        );
        const { idUser, token } = response.data;

        localStorage.setItem("@TOKEN", token);
        localStorage.setItem("@IDUSER", idUser);
    }
}

export { LoginService };