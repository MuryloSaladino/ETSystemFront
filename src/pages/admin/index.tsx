import { CustomAppBar, NavigationGrid } from "../../components"
import GroupIcon from '@mui/icons-material/Group';
import { IAccess } from "../../interfaces";

const AdminPage = () => {

    const navigationItems:IAccess[] = [
        {
            name: "Users",
            path: "/admin/users",
            icon: <GroupIcon/>
        },
        {
            name: "Instructors",
            path: "/admin/instructors",
            icon: <GroupIcon/>
        }
    ]

    return(
        <>
            <CustomAppBar/>

            <NavigationGrid navigationItems={navigationItems}/>
        </>
    )
}

export default AdminPage
