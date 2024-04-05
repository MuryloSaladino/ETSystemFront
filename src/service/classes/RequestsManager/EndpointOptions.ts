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
        Object.keys(this.pathParams).forEach(param => {
            this.formatEndpoint = this.formatEndpoint.replace(`:${param}`, String(this.pathParams[param]))
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