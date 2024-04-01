import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";

import Homepage from "../pages/homepage";
import Login from "../pages/login";

import DashboardPage from "../pages/dashboard";
import SettingsPage from "../pages/settings";

import AdminPage from "../pages/admin";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="*" element={<Homepage/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/dashboard" element={<ProtectedRoute/>}>
                <Route index element={<DashboardPage/>}/>
            </Route>

            <Route path="/admin" element={<ProtectedRoute/>}>
                <Route index element={<AdminPage/>}/>
            </Route>

            <Route path="/settings" element={<ProtectedRoute/>}>
                <Route index element={<SettingsPage/>}/>
            </Route>
        </Routes>
    );
};

export default RoutesMain