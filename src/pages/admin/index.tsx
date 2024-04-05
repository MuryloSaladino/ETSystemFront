import { adminDisciplinesAccess, adminInstitutionsAccess, adminInstructorsAccess, adminStudentsAccess, adminUsersAccess } from "../../interfaces";
import { CustomAppBar, NavigationGrid } from "../../components"
import { UserContext } from "../../context/UserContext";
import { IAccess } from "../../interfaces";
import { useContext, useEffect, useState } from "react";
import AppBreadcrumbs from "../../components/Breadcrumbs";
import { Container, Stack } from "@mui/material";


const AdminPage = () => {

    const [navigationItems, setNavigationItems] = useState<IAccess[]>([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        const buildAccess = async () => {
            setNavigationItems([])
            if(user && user.administrator) {
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

            <Container maxWidth="md">
                <Stack spacing={2}>
                    <AppBreadcrumbs/>
                    <NavigationGrid navigationItems={navigationItems}/>
                </Stack>
            </Container>
        </>
    )
}

export default AdminPage
