import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Homepage } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const RoutesMain = () => {
    return (
       <Routes>
            <Route path="*" element={<Homepage/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboard" element={<ProtectedRoute/>}>
                <Route element={<></>}>

                </Route>
            </Route>
       </Routes>
    );
 };