import { ReactNode, createContext, useState } from "react";

import { IUser } from "../interfaces/userInterfaces";


export const UserContext = createContext({});

interface IUserProviderProps {
    children: ReactNode;
}

export function UserProvider({children}:IUserProviderProps) {

    const [user, setUser] = useState<IUser|null>(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}