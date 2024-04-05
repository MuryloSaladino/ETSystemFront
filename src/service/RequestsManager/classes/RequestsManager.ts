import { AxiosHeaderValue, AxiosInstance } from "axios";
import { EndpointOptions } from "./EndpointOptions";

class RequestsManager {
    instance: AxiosInstance;
    auth: AxiosHeaderValue;

    public constructor(instance: AxiosInstance) {
        this.instance = instance;
        this.auth = null;
    }

    setAuth(token: string) {
        this.auth = `Bearer ${token}`;
    }

    get = async(endpointOptions: EndpointOptions) => {
        const endpointUrl = endpointOptions.getEndpoint();
        return await this.instance.get(
            endpointUrl,
            { headers: { Authorization: this.auth } }
        );
    };

    post = async<TData>(endpointOptions: EndpointOptions, data: TData) => {
        const endpointUrl = endpointOptions.getEndpoint();
        return await this.instance.post(
            endpointUrl,
            data,
            { headers: { Authorization: this.auth } }
        );
    };

    patch = async<TData>(endpointOptions: EndpointOptions, data: TData) => {
        const endpointUrl = endpointOptions.getEndpoint();
        return await this.instance.patch(
            endpointUrl,
            data,
            { headers: { Authorization: this.auth } }
        )
    }
}

export { RequestsManager };