import './styles/Reset.css'
import './styles/GlobalStyles.css'
import RoutesMain from "./routes/RoutesMain";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { ColorsContext } from './context/ColorsContext';
import { UserProvider } from './context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {

  const { theme } = useContext(ColorsContext)

  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UserProvider>
          <RoutesMain/>
        </UserProvider>
        <ToastContainer/>
      </ThemeProvider>
    </LocalizationProvider>
  ) 
}

export default App
