import { Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import { StyledHeaderBox } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const DashboardPage = () => {
    
    const { user } = useContext(UserContext)
    
    return(
        <>  
            <CustomAppBar/>

            <StyledHeaderBox sx={{ backgroundColor: "light" }}>
                <Typography>{user?.name}</Typography>
            </StyledHeaderBox>
        </>
    )
}

export default DashboardPage