import { Verb } from "../enums/Verb.enum"

interface IBaseRequest {
    verb: Verb;
    endpoint: string;
}

export type { IBaseRequest };