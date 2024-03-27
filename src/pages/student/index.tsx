import { Outlet } from "react-router-dom"
import { CustomAppBar } from "../../components"

const StudentPage = () => {


    return(
        <>
            <CustomAppBar/>

            <Outlet/>
        </>
    )
}

export default StudentPage
