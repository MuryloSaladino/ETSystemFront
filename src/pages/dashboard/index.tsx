import { Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import { UserProvider } from "../../context/UserContext"

const DashboardPage = () => {
    
    return(
        <UserProvider>  
            <CustomAppBar/>

            <Typography variant="h4">Dashboard</Typography>
        </UserProvider>
    )
}

export default DashboardPage