import { Verb } from "../enums/Verb.enum";
import { Endpoint } from "./Endpoint";
import { IBaseRequest } from "../interfaces/BaseRequest.interface";

class BaseRequest {
    verb: Verb;
    endpoint: Endpoint;

    public constructor(verb: Verb, endpoint: Endpoint) {
        this.verb = verb;
        this.endpoint = endpoint;
    }

    getRequest = (): IBaseRequest => {
        return {
            verb: this.verb,
            endpoint: this.endpoint.getEndpoint()
        };
    }
}

export { BaseRequest };