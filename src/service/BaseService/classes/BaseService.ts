import { AxiosInstance, AxiosResponse } from "axios";
import { BaseRequest } from "./BaseRequest";
import { Endpoint } from "./Endpoint";
import { Verb } from "../enums/Verb.enum";

class BaseService {
    instance: AxiosInstance;
    requests: Record<string, () => Promise<AxiosResponse<any, any>>>

    public constructor(instance: AxiosInstance) {
        this.instance = instance;
        this.requests = {};
    }

    get = (endpoint: string) => {
        this.requests[endpoint] = this.solveCallback()
    }

    solveCallback = (endpointOptions: Endpoint) => {
        const finalEndpoint = endpointOptions.getEndpoint();
        return this.instance.get(finalEndpoint);
    }
}

export { BaseService };