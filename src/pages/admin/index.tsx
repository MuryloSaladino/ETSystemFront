import { Outlet } from "react-router-dom"
import { CustomAppBar } from "../../components"

const AdminPage = () => {


    return(
        <>
            <CustomAppBar/>

            <Outlet/>
        </>
    )
}

export default AdminPage
