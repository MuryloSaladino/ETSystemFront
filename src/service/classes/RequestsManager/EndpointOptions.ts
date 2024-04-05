class EndpointOptions {
    formatEndpoint: string;
    pathParams: Record<string, string | number>;
    queryParams: Record<string, string | number>;

    public constructor(
        formatEndpoint: string,
        pathParams: Record<string, string | number>,
        queryParams: Record<string, string | number>
    ) {
        this.formatEndpoint = formatEndpoint;
        this.pathParams = pathParams;
        this.queryParams = queryParams;
    }

    private setEndpointPath(): void {
        const regex = /\/:([^\/]+)/g;
        this.formatEndpoint.replace(regex, (_, token) => {
            if (this.pathParams.hasOwnProperty(token)) {
                return `/${this.pathParams[token]}`;
            }
            throw new Error(`Token "${token}" not found in path parameters.`);
        });
    }

    private setEndpointQueries(): void {
        let foundOne = false;
        for (const param in this.queryParams) {
            this.formatEndpoint += `${foundOne ? "&" : "?"}${param}=${this.queryParams[param]}`;
            foundOne = true;
        }
    }

    getEndpoint(): string {
        this.setEndpointPath();
        this.setEndpointQueries();
        return encodeURI(this.formatEndpoint);
    }
}

export { EndpointOptions };