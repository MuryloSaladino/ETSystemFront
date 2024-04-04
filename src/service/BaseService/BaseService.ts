import { AxiosInstance } from "axios";
import { RequestsManager } from "../RequestsManager";

abstract class BaseService {
    manager: RequestsManager;

    public constructor(instance: AxiosInstance, token: string) {
        this.manager = new RequestsManager(instance, token);
    }
}

export { BaseService };