import { Container, Typography } from "@mui/material"
import { CustomAppBar, NavigationGrid } from "../../components"
import { StyledHeaderBox, StyledHeaderContainer } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { getParsedDate } from "../../utils/date"


const DashboardPage = () => {
    
    const { user, access } = useContext(UserContext)
    const dateParsed = getParsedDate()
    
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

            {
                access.length > 0 ?
                <NavigationGrid navigationItems={access}/> :
                <Container maxWidth="md">
                    <Typography variant="h6">Your user hasn't been given any access yet.</Typography>
                </Container>
            }
        </>
    )
}

export default DashboardPage