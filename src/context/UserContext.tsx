import { ReactNode, createContext, useEffect, useState } from "react";
import { adminAccess, IAccess, instructorAccess, IUser, studentAccess } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { getUser } from "../service/user";


export const UserContext = createContext({} as IUserProvider);

interface IUserProviderProps {
    children: ReactNode;
}
interface IUserProvider {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    access: IAccess[];
    logout: () => void;
}

export const UserProvider = ({children}:IUserProviderProps) => {

    const [user, setUser] = useState<IUser|null>(null)
    const [access, setAccess] = useState<IAccess[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const buildUser = async () => {
            const token:string|null = localStorage.getItem("@TOKEN")
            const idUser:string|null = localStorage.getItem("@IDUSER")

            if(token && idUser) {
                try {
                    setUser(await getUser(idUser, token))
                } catch (error) {
                    localStorage.clear()
                    console.error(error)
                    navigate("/login")
                }
            }
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

    const logout = ():void => {
        localStorage.clear()
        setUser(null)
        navigate("/login")
    }

    return (
        <UserContext.Provider value={{ user, setUser, access, logout }}>
            {children}
        </UserContext.Provider>
    )
}