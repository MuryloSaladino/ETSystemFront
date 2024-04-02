import { CustomAppBar, NavigationGrid } from "../../components"
import { UserContext } from "../../context/UserContext";
import { IAccess } from "../../interfaces";
import { useContext, useEffect, useState } from "react";

const AdminPage = () => {

    const [navigationItems, setNavigationItems] = useState<IAccess[]>([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        const buildAccess = async () => {
            
        }
        buildAccess()
    }, [user])

    return(
        <>
            <CustomAppBar/>

            <NavigationGrid navigationItems={navigationItems}/>
        </>
    )
}

export default AdminPage
