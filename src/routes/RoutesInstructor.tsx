import { Route, Routes } from "react-router-dom"
import InstructorPage from "../pages/instructor"

const RoutesInstructor = () => {


    return(
        <Routes>
            <Route path="/" element={<InstructorPage/>}>
                <Route index/>
            </Route>
        </Routes>
    )
}

export default RoutesInstructor