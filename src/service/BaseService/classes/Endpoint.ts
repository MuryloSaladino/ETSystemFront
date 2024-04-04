class Endpoint {
    formatEndpoint: string;
    pathParams: Record<string, string | number>;

    public constructor(formatEndpoint: string, pathParams: Record<string, string | number>) {
        this.formatEndpoint = formatEndpoint;
        this.pathParams = pathParams;
    }

    getEndpoint = (): string => {
        const regex = /\/:([^\/]+)/g;
        return this.formatEndpoint.replace(regex, (_, token) => {
            if (this.pathParams.hasOwnProperty(token)) {
                return `/${this.pathParams[token]}`;
            }
            throw new Error(`Token "${token}" not found in path parameters.`);
        });
    }
}

export { Endpoint };