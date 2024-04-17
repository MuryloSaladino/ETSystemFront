import { toast } from "react-toastify"
import APIRequestError from "../errors/APIRequestError"

export type IToastType = "default" | "error" | "info" | "success" | "warning"

class AppToast {

    private static getTheme():string {
        return localStorage.getItem("@THEME") === "DARK" ? "dark" : "light"
    }

    public static notify(message:string, type:IToastType = "default"):void {
        toast(
            message, 
            { 
                type: type,
                theme: AppToast.getTheme()
            }
        )
    }

    public static notifyError(error:APIRequestError | Error):void {
        const notificationMessage = error instanceof APIRequestError ? 
            error.message : APIRequestError.messages[400]

        toast(
            notificationMessage, 
            { 
                type: "error",
                theme: AppToast.getTheme()
            }
        )
    }
}

export default AppToast