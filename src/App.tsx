import './styles/Reset.css'
import './styles/GlobalStyles.css'
import RoutesMain from "./routes/RoutesMain";
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
        <UserProvider>
          <MessageProvider>
            <RoutesMain/>
          </MessageProvider>
        </UserProvider>
    </ThemeProvider>
  ) 
}

export default App
