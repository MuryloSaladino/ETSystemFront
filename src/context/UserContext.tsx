import { ReactNode, createContext, useEffect, useState } from "react";
import { IAccess, IUser, studentAccess } from "../interfaces";



export const UserContext = createContext({});

interface IUserProviderProps {
    children: ReactNode;
}

export function UserProvider({children}:IUserProviderProps) {

    const [user, setUser] = useState<IUser|null>(null)
    const [access, setAccess] = useState<IAccess[]>([])

    useEffect(() => {
        const instanceAccess = () => {
            setAccess([])

            if(user?.idStudent) {
                setAccess((prev) => [...prev, studentAccess])
            }
            if(user?.idInstructor) {
                setAccess((prev) => [...prev, studentAccess])
            }
            if(user?.idStudent) {
                setAccess((prev) => [...prev, studentAccess])
            }
        }
        instanceAccess()
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}