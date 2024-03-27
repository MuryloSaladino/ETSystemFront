import { Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import { StyledHeaderBox } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const DashboardPage = () => {
    
    const { user } = useContext(UserContext)

    const date = new Date()
    const dateParsed = [date.getDate().toString().padStart(2, "0"), date.getMonth().toString().padStart(2, "0"), date.getFullYear()].join("/")
    
    return(
        <>  
            <CustomAppBar/>

            <StyledHeaderBox>
                <Typography variant="h5">{user?.name || user?.username}</Typography>
                <Typography variant="h5">{user?.institution.name} - {dateParsed}</Typography>
            </StyledHeaderBox>
        </>
    )
}

export default DashboardPage