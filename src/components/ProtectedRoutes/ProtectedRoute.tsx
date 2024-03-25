import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = () => {
    const { user }:any = useContext(UserContext);
    
    return user ? <Outlet/> : <Navigate to="/login"/>

    //debug return
    return <Outlet/>
}

export default ProtectedRoute