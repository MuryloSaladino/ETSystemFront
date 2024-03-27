import { Route, Routes } from "react-router-dom"
import AdminPage from "../pages/admin"

const RoutesAdmin = () => {


    return(
        <Routes>
            <Route path="/" element={<AdminPage/>}>
                <Route index/>
            </Route>
        </Routes>
    )
}

export default RoutesAdmin