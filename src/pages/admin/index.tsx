import { adminDisciplinesAccess, adminInstitutionsAccess, adminInstructorsAccess, adminStudentsAccess, adminUsersAccess } from "../../interfaces";
import { CustomAppBar, NavigationGrid } from "../../components"
import { UserContext } from "../../context/UserContext";
import { IAccess } from "../../interfaces";
import { useContext, useEffect, useState } from "react";


const AdminPage = () => {

    const [navigationItems, setNavigationItems] = useState<IAccess[]>([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        const buildAccess = async () => {
            setNavigationItems([])
            if(user && user.idAdministrator) {
                setNavigationItems([
                    adminDisciplinesAccess,
                    adminInstitutionsAccess,
                    adminUsersAccess
                ])
                if(user.institution.isBosch) {
                    setNavigationItems((prev) => [
                        ...prev,
                        adminStudentsAccess,
                        adminInstructorsAccess
                    ])
                }
            }
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
