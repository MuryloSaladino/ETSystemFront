import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export function ProtectedRoute() {
    const { user }:any = useContext(UserContext);
    
    return user ? <Outlet/> : <Navigate to="/login"/>
}