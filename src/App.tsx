// import { GlobalStyles } from "./styles/GlobalStyles"
// import { ResetStyles } from "./styles/ResetStyles";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import RoutesMain from "./routes/RoutesMain";

import './styles/Reset.css'
import './styles/GlobalStyles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <>
      <RoutesMain/>

      <ToastContainer/>
    </>
  )
}

export default App
