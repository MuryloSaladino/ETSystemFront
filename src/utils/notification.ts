import { toast } from "react-toastify"

type IToastType = "default" | "error" | "info" | "success" | "warning"

class AppToast {

    private static getTheme():string {
        return localStorage.getItem("@THEME") === "DARK" ? "dark" : "light"
    }

    static notify(message:string, type:IToastType = "default"):void {
        toast(
            message, 
            { 
                type: type,
                theme: AppToast.getTheme()
            }
        )
    }
}

export default AppToast