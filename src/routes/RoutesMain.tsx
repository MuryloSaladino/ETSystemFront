import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";
import Homepage from "../pages/homepage";
import Login from "../pages/login";
import DashboardPage from "../pages/dashboard";
import RoutesAdmin from "./RoutesAdmin";
import RoutesInstructor from "./RoutesInstructor";
import RoutesStudent from "./RoutesStudent";
import SettingsPage from "../pages/settings";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="*" element={<Homepage/>}/>
            <Route path="/" element={<Homepage/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/dashboard" element={<ProtectedRoute/>}>
                <Route index element={<DashboardPage/>}/>
                <Route path="/dashboard/admin" element={<RoutesAdmin/>}/>
                <Route path="/dashboard/instructor" element={<RoutesInstructor/>}/>
                <Route path="/dashboard/student" element={<RoutesStudent/>}/>
            </Route>

            <Route path="/settings" element={<ProtectedRoute/>}>
                <Route index element={<SettingsPage/>}/>
            </Route>
        </Routes>
    );
};

export default RoutesMain