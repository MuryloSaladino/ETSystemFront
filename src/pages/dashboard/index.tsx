import { Chip, Container, Stack, Typography } from "@mui/material"
import { CustomAppBar, NavigationGrid } from "../../components"
import { StyledHeaderBox, StyledHeaderContainer } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { getParsedCurrentDate } from "../../utils/date"


const DashboardPage = () => {
    
    const { user, access } = useContext(UserContext)
    const dateParsed = getParsedCurrentDate()
    
    return(
        <>  
            <CustomAppBar/>

            <StyledHeaderBox>
                <StyledHeaderContainer maxWidth="md">
                    <Stack alignItems="center" flexDirection="row" gap={1}>
                        <PersonIcon/><Typography variant="h5">{user?.name || user?.username}</Typography>
                    </Stack>
                    <Stack alignItems="center" flexDirection="row" gap={1}>
                        <LocationOnIcon/><Typography variant="h5">{user?.institution.name} - {dateParsed}</Typography>
                    </Stack>
                </StyledHeaderContainer>
            </StyledHeaderBox>

            <Container maxWidth="md">
                <Typography variant="h5">Acessos:</Typography>
                {
                    access.length > 0 ?
                    <NavigationGrid navigationItems={access}/> :
                    <Container maxWidth="md">
                        <Typography variant="h6">Your user hasn't been given any access yet.</Typography>
                    </Container>
                }
            </Container>
        </>
    )
}

export default DashboardPage