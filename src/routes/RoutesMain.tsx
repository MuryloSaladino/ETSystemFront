import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";
import Homepage from "../pages/homepage";
import Login from "../pages/login";
import DashboardPage from "../pages/dashboard";
import RoutesAdmin from "./RoutesAdmin";
import RoutesInstructor from "./RoutesInstructor";
import RoutesStudent from "./RoutesStudent";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="*" element={<Homepage/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/dashboard" element={<ProtectedRoute/>}>
                <Route index element={<DashboardPage/>}/>
                <Route path="/admin" element={<RoutesAdmin/>}/>
                <Route path="/instructor" element={<RoutesInstructor/>}/>
                <Route path="/student" element={<RoutesStudent/>}/>
            </Route>
        </Routes>
    );
};

export default RoutesMain