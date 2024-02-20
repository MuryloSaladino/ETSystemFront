import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    // const { user } = useContext(UserContext);
    
    return false ? <Outlet/> : <Navigate to="/"/>
}