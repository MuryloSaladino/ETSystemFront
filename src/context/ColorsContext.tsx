import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode, createContext, useState } from "react";
import { darkPalette, lightPalette } from "../styles/themes";
import { CssBaseline } from '@mui/material';

interface IColorsContext {
    toggleTheme: () => void;

}
interface IColorsProviderProps {
    children: ReactNode
}

export const ColorsContext = createContext({} as IColorsContext)

export const ColorsProvider = ({children}:IColorsProviderProps) => {

    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("@THEME") === "DARK")
    const theme:Theme = createTheme(darkMode ? darkPalette : lightPalette);

    const toggleTheme = () => {
        setDarkMode((prev) => {
            localStorage.setItem("@THEME", prev ? "LIGHT" : "DARK")
            return !prev
        })
    }

    return(
        <ColorsContext.Provider value={{ toggleTheme }}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorsContext.Provider>
    )
}