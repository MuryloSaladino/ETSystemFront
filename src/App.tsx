import './styles/Reset.css'

import RoutesMain from "./routes/RoutesMain";

import { StyledBoschColors } from "./styles/GlobalStyled";
import BoschColors from "../public/bosch_colors.svg"

import { CssBaseline, Theme, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import { darkPalette, lightPalette } from './styles/themes';


function App() {

  const [ darkMode, setDarkMode ] = useState<boolean>(false)
  const theme:Theme = createTheme(darkMode ? darkPalette : lightPalette);

  return(
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <StyledBoschColors src={BoschColors}/>
        <RoutesMain/>
      </ThemeProvider>
    </>
  ) 
}

export default App
