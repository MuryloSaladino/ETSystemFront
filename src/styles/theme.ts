import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: "#007bc0",
            main: "#00629a",
            dark: "#004975"
        },
        secondary: {
            light: "#9e2896",
            main: "#791d73",
            dark: "#551151"
        },
        error: {
            light: "#ed0007",
            main: "#be0004",
            dark: "#920002"
        },
        warning: {
            light: "#ffcf00",
            main: "#deb300",
            dark: "#bd9900"
        },
        info: {
            light: "#18837e",
            main: "#116864",
            dark: "#0a4f4b"
        },
        success: {
            light: "#00884a",
            main: "#006c3a",
            dark: "#00512a"
        }
    }
})

export default theme