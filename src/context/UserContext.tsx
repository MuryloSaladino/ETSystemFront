import { ReactNode, createContext, useEffect, useState } from "react";
import { adminAccess, IAccess, instructorAccess, IUser, studentAccess } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { retrieveUser } from "../service/requests";

interface IUserProviderProps {
    children: ReactNode;
}
interface IUserProvider {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    access: IAccess[];
    logout: () => void;
    buildUser: () => Promise<void>
}

export const UserContext = createContext({} as IUserProvider);

export const UserProvider = ({children}:IUserProviderProps) => {

    const [user, setUser] = useState<IUser|null>(null)
    const [access, setAccess] = useState<IAccess[]>([])
    const navigate = useNavigate()

    const buildUser = async () => {
        const token:string|null = localStorage.getItem("@TOKEN")
        const idUser:string|null = localStorage.getItem("@IDUSER")

        if(token && idUser) {
            setUser(await retrieveUser(idUser))
        }
    }

    useEffect(() => { buildUser() }, [])

    useEffect(() => {
        const buildAccess = () => {
            setAccess([])
            if(user) {
                if(user.student) {
                    setAccess((prev) => [...prev, studentAccess])
                }
                if(user.instructor) {
                    setAccess((prev) => [...prev, instructorAccess])
                }
                if(user.administrator) {
                    setAccess((prev) => [...prev, adminAccess])
                }
            }
        }
        buildAccess()
    }, [user])

    const logout = ():void => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@IDUSER")
        setUser(null)
        navigate("/login")
    }

    return (
        <UserContext.Provider value={{ user, setUser, access, logout, buildUser }}>
            {children}
        </UserContext.Provider>
    )
}