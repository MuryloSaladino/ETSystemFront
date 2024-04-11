import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

interface IProtectedRouteProps {
    genericUserAccess?: boolean;
}

const ProtectedRoute = ({ genericUserAccess }:IProtectedRouteProps) => {
    const { user } = useContext(UserContext);
    const idUser = localStorage.getItem("@IDUSER")
    const token = localStorage.getItem("@TOKEN")

    if(!user && !(idUser && token)) {
        return <Navigate to="/login"/>
    }
    if(genericUserAccess) {
        return <Outlet/> 
    }

    const filteredUser = {
        ...user,
        administrator: undefined,
        instructor: undefined,
        student: undefined
    }
    return (
        Object.values(filteredUser).includes(null)
        ? <Navigate to="/settings"/>
        : <Outlet/>
    )
}

export default ProtectedRoute