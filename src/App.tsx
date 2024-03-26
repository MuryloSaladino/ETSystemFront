import './styles/Reset.css'
import RoutesMain from "./routes/RoutesMain";
import { StyledBody } from "./styles/GlobalStyled";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { ColorsContext } from './context/ColorsContext';


function App() {

  const { theme } = useContext(ColorsContext)

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <StyledBody>
        <RoutesMain/>
      </StyledBody>
    </ThemeProvider>
  ) 
}

export default App
