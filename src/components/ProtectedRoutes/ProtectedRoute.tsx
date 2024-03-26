import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = () => {
    const { user } = useContext(UserContext);
    const idUser = localStorage.getItem("@IDUSER")
    const token = localStorage.getItem("@TOKEN")
    
    return user || (idUser && token) ? <Outlet/> : <Navigate to="/login"/>

    //debug return
    // return <Outlet/>
}

export default ProtectedRoute