import './styles/Reset.css'

import RoutesMain from "./routes/RoutesMain";

import { StyledBody } from "./styles/GlobalStyled";

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
        <StyledBody>
          <RoutesMain/>
        </StyledBody>
      </ThemeProvider>
    </>
  ) 
}

export default App
