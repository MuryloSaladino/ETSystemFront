import './styles/Reset.css'
import RoutesMain from "./routes/RoutesMain";
import { StyledBody } from "./styles/GlobalStyled";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { ColorsContext } from './context/ColorsContext';
import { UserProvider } from './context/UserContext';
import { MessageProvider } from './context/MessageContext';


function App() {

  const { theme } = useContext(ColorsContext)

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <StyledBody>
        <UserProvider>
          <MessageProvider>
            <RoutesMain/>
          </MessageProvider>
        </UserProvider>
      </StyledBody>
    </ThemeProvider>
  ) 
}

export default App
