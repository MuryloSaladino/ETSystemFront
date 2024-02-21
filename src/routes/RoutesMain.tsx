import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Homepage } from "../pages/home";
import { Login } from "../pages/login";

export const RoutesMain = () => {
    return (
       <Routes>
            <Route path="*" element={<Homepage/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/dashboard" element={<ProtectedRoute/>}>
                <Route element={<></>}>

                </Route>
            </Route>
       </Routes>
    );
 };