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
    darkMode: boolean;
    toggleTheme: () => void;
}

export const UserProvider = ({children}:IUserProviderProps) => {

    const [user, setUser] = useState<IUser|null>(null)
    const [access, setAccess] = useState<IAccess[]>([])
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("@THEME") === "DARK")
    const navigate = useNavigate()

    useEffect(() => {
        const buildUser = async () => {
            const token:string|null = localStorage.getItem("@TOKEN")
            const userId:string|null = localStorage.getItem("@USERID")

            if(!token || !userId) {
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

    const toggleTheme = () => {
        setDarkMode((prev) => {
            localStorage.setItem("@THEME", prev ? "LIGHT" : "DARK")
            return !prev
        })
    }

    return (
        <UserContext.Provider value={{ user, setUser, access, darkMode, toggleTheme }}>
            {children}
        </UserContext.Provider>
    )
}