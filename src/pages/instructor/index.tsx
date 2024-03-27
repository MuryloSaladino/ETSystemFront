import { Outlet } from "react-router-dom"
import { CustomAppBar } from "../../components"

const InstructorPage = () => {


    return(
        <>
            <CustomAppBar/>

            <Outlet/>
        </>
    )
}

export default InstructorPage
