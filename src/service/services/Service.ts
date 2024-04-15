import { AxiosInstance } from "axios";
import { FieldValues } from "react-hook-form";
import AppToast, { IToastType } from "../../utils/AppToast";

type TVerb = "get" | "post" | "patch" | "put" | "delete"

interface IFeedbackConfig {
    enabled: boolean;    
    message?: string;
    type?: IToastType;
}

class Service {

    apiInstance:AxiosInstance

    public constructor(apiInstance:AxiosInstance) {
        this.apiInstance = apiInstance
    }

    public async request(
        verb:TVerb,
        url:string,
        data:FieldValues,
        queryParams:Record<string, string|number>,
        feedbackconfig:IFeedbackConfig
    ) {
        try {
            const response = await this.apiInstance.request({
                headers: {
                    "Authorization": localStorage.getItem("@TOKEN"),
                },
                method: verb,
                url: url,
                params: queryParams,
                data: data
            })

            if(feedbackconfig.enabled) {
                AppToast.notify(
                    feedbackconfig.message || "All done, request successful!",
                    feedbackconfig.type || "success"
                )
            }

            return response.data
        } catch (error) {
            if(error instanceof Error) 
                AppToast.notifyError(error)
        }
    }
}

export default Service