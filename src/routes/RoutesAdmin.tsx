import { Route, Routes } from "react-router-dom"
import AdminPage from "../pages/admin"
import UsersPage from "../pages/admin/users"

const RoutesAdmin = () => {


    return(
        <Routes>
            <Route path="/" element={<AdminPage/>}/>
            <Route path="/dashboard/admin/users" element={<UsersPage/>}/>
        </Routes>
    )
}

export default RoutesAdmin