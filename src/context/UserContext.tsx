import { ReactNode, createContext, useEffect, useState } from "react";
import { adminAccess, IAccess, instructorAccess, IUser, studentAccess } from "../interfaces";
import { useNavigate } from "react-router-dom";
import api from "../service";


export const UserContext = createContext({});

interface IUserProviderProps {
    children: ReactNode;
}

export function UserProvider({children}:IUserProviderProps) {

    const [user, setUser] = useState<IUser|null>(null)
    const [access, setAccess] = useState<IAccess[]>([])

    useEffect(() => {
        const buildUser = async () => {
            const token:string|null = localStorage.getItem("@TOKEN")
            const userId:string|null = localStorage.getItem("@USERID")

            if(!token || !userId) {
                const navigate = useNavigate()
                navigate("/login")
            }

            const getUser = await api.get("/user/"+userId)
            setUser(getUser.data)
        }
        const buildAccess = () => {
            setAccess([])

            if(user?.idStudent) {
                setAccess((prev) => [...prev, studentAccess])
            }
            if(user?.idInstructor) {
                setAccess((prev) => [...prev, instructorAccess])
            }
            if(user?.idAdmin) {
                setAccess((prev) => [...prev, adminAccess])
            }
        }
        buildUser()
        buildAccess()
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser, access }}>
            {children}
        </UserContext.Provider>
    )
}