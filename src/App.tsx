import './styles/Reset.css'
import RoutesMain from "./routes/RoutesMain";
import { StyledBody } from "./styles/GlobalStyled";
import { CssBaseline } from '@mui/material';
import { ColorsProvider } from './context/ColorsContext';


function App() {



  return(
    <ColorsProvider>
      <CssBaseline/>
      <StyledBody>
        <RoutesMain/>
      </StyledBody>
    </ColorsProvider>
  ) 
}

export default App
