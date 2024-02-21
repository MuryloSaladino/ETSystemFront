import { ReactNode, createContext } from "react";

export const UserContext = createContext({});

interface IUserProviderProps {
    children: ReactNode;
}

export function UserProvider ({children}:IUserProviderProps) {

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}