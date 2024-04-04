class APIRequestError extends Error {

    public static messages:Record<number, string> = {
        400: "Oops! Looks like something is wrong in your request.",
        401: "You are not allowed to do that.",
        403: "You do not have access for that",
        404: "Sorry, we couldn't find what you were looking for.",
        409: "It seems that what you were trying to do conflicts with our data.",
    }

    public message: string;
    public statusCode: number;

    public constructor(statusCode:number = 400) {
        super()
        this.statusCode = statusCode
        this.message = APIRequestError.messages[this.statusCode]
    }
}