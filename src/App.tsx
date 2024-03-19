import { GlobalStyles } from "./styles/GlobalStyles"
import { ResetStyles } from "./styles/ResetStyles";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { RoutesMain } from "./routes/RoutesMain"

function App() {

  return (
    <>
      <GlobalStyles/>
      <ResetStyles/>

      <RoutesMain/>

      <ToastContainer/>
    </>
  )
}

export default App
