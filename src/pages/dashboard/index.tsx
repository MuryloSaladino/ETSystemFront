import { Card, CardActionArea, CardHeader, Container, Grid, Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import { StyledHeaderBox, StyledHeaderContainer } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom"

const DashboardPage = () => {
    
    const { user, access } = useContext(UserContext)
    const navigate = useNavigate()

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

            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {
                        access.map((acc) =>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Card key={acc.name} variant="outlined">
                                    <CardActionArea onClick={() => navigate(acc.path)} sx={{display:"flex"}}>
                                        <CardHeader title={acc.name}/>
                                        {acc.icon("large")}
                                    </CardActionArea>
                                </Card> 
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </>
    )
}

export default DashboardPage