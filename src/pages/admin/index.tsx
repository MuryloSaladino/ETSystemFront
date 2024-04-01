import { CustomAppBar, NavigationGrid } from "../../components"
import GroupIcon from '@mui/icons-material/Group';
import { IAccess } from "../../interfaces";

const AdminPage = () => {

    const navigationItems:IAccess[] = [
        {
            name: "users",
            path: "/dashboard/admin/users",
            icon: <GroupIcon/>
        },
    ]

    return(
        <>
            <CustomAppBar/>

            <NavigationGrid navigationItems={navigationItems}/>
        </>
    )
}

export default AdminPage
