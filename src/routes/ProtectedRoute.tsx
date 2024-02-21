import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export function ProtectedRoute() {
    const {  } = useContext(UserContext);
    
    return false ? <Outlet/> : <Navigate to="/login"/>
}