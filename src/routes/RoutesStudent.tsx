import { Route, Routes } from "react-router-dom"
import StudentPage from "../pages/student"

const RoutesStudent = () => {


    return(
        <Routes>
            <Route path="/" element={<StudentPage/>}>
                <Route index/>
            </Route>
        </Routes>
    )
}

export default RoutesStudent