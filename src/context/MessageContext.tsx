import { Alert, Snackbar } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

type TSeverity = "info" | "success" | "error" | "warning"
interface IMessageProvider {
    popNotification: (message:string, severity?:TSeverity) => Promise<void>;
}
interface IMessageProviderProps {
    children: ReactNode
}

export const MessageContext = createContext({} as IMessageProvider)

export const MessageProvider = ({children}:IMessageProviderProps) => {

    const timeout = 5000

    const [message, setMessage] = useState<string>("")
    const [severity, setSeverity] = useState<TSeverity>("info")
    const [open, setOpen] = useState<boolean>(false)

    const popNotification = async (message:string, severity:TSeverity = "info"):Promise<void> => {
        setMessage(message)
        setSeverity(severity)
        setOpen(true)
    }

    return(
        <MessageContext.Provider value={{ popNotification }}>
            <Snackbar
                open={open}
                autoHideDuration={timeout}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical:"top", horizontal:"center" }}>
                <Alert 
                    onClose={() => setOpen(false)}
                    severity={severity}
                    sx={{ width: "100%" }}>
                    {message}
                </Alert>
            </Snackbar>
            {children}
        </MessageContext.Provider>
    )
}