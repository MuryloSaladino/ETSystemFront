import { AxiosInstance } from "axios";
import { RequestsManager } from "../RequestsManager";

abstract class BaseService {
    manager: RequestsManager;

    public constructor(instance: AxiosInstance) {
        this.manager = new RequestsManager(instance);
    }
}

export { BaseService };