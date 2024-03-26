import { ReactNode, createContext, useEffect, useState } from "react";
import { adminAccess, IAccess, instructorAccess, IUser, studentAccess } from "../interfaces";
import { useNavigate } from "react-router-dom";
import api from "../service";


export const UserContext = createContext({} as IUserProvider);

interface IUserProviderProps {
    children: ReactNode;
}
interface IUserProvider {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    access: IAccess[];
}

export const UserProvider = ({children}:IUserProviderProps) => {

    const [user, setUser] = useState<IUser|null>(null)
    const [access, setAccess] = useState<IAccess[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const buildUser = async () => {
            const token:string|null = localStorage.getItem("@TOKEN")
            const userId:string|null = localStorage.getItem("@USERID")

            if(!token || !userId) {
                navigate("/login")
                return
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