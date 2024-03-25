import { ReactNode, createContext, useState } from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { IUser } from "../interfaces";


export const UserContext = createContext({});

interface IUserProviderProps {
    children: ReactNode;
}

export function UserProvider({children}:IUserProviderProps) {

    const [user, setUser] = useState<IUser|null>(null)

    const test = {
        name: "admin",
        icon: <AdminPanelSettingsIcon/>,
        path: ""
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}