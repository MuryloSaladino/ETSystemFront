import { Container, Typography } from "@mui/material"
import { CustomAppBar, NavigationGrid } from "../../components"
import { StyledHeaderBox, StyledHeaderContainer } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';


const DashboardPage = () => {
    
    const { user, access } = useContext(UserContext)
    const date = new Date()
    const dateParsed = [date.getDate().toString().padStart(2, "0"), date.getMonth().toString().padStart(2, "0"), date.getFullYear()].join("/")
    
    return(
        <>  
            <CustomAppBar/>

            <StyledHeaderBox>
                <StyledHeaderContainer maxWidth="md">
                    <Typography variant="h5"><PersonIcon/> {user?.name || user?.username}</Typography>
                    <Typography variant="h5"><LocationOnIcon/> {user?.institution.name} - {dateParsed}</Typography>
                </StyledHeaderContainer>
            </StyledHeaderBox>

            <Container maxWidth="md">
                <Typography variant="h5">Acessos:</Typography>
            </Container>

            <NavigationGrid navigationItems={access}/>
        </>
    )
}

export default DashboardPage