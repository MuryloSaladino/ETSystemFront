import { Theme, createTheme } from "@mui/material";
import { ReactNode, createContext, useState } from "react";
import { darkPalette, lightPalette } from "../styles/themes";

interface IColorsContext {
    toggleTheme: () => void;
    theme: Theme;
    darkMode: boolean;
}
interface IColorsProviderProps {
    children: ReactNode
}

export const ColorsContext = createContext({} as IColorsContext)

export const ColorsProvider = ({children}:IColorsProviderProps) => {

    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("@THEME") === "DARK")
    const theme:Theme = createTheme(darkMode ? darkPalette : lightPalette)

    const toggleTheme = () => {
        setDarkMode((prev) => {
            localStorage.setItem("@THEME", prev ? "LIGHT" : "DARK")
            return !prev
        })
    }

    return(
        <ColorsContext.Provider value={{ toggleTheme, theme, darkMode }}>
            {children}
        </ColorsContext.Provider>
    )
}