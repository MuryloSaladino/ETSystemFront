import { GlobalStyles } from "./styles/GlobalStyles"
import { ResetStyles } from "./styles/ResetStyles";
import 'bootstrap/dist/css/bootstrap.min.css';

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
