import './styles/Reset.css'
import RoutesMain from "./routes/RoutesMain";
import { StyledBody } from "./styles/GlobalStyled";
import { ColorsProvider } from './context/ColorsContext';
import { UserProvider } from './context/UserContext';


function App() {



  return(
    <ColorsProvider>
      <StyledBody>
        <UserProvider>
          <RoutesMain/>
        </UserProvider>
      </StyledBody>
    </ColorsProvider>
  ) 
}

export default App
