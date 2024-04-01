import { useNavigate } from "react-router-dom"
import { CustomAppBar } from "../../components"
import { Card, CardActionArea, CardHeader, Container, Grid } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group';

const AdminPage = () => {

    const navigate = useNavigate()


    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Card variant="outlined">
                            <CardActionArea onClick={() => navigate("/admin/users")} sx={{display:"flex"}}>
                                <CardHeader title={"Users"}/>
                                <GroupIcon/>
                            </CardActionArea>
                        </Card> 
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AdminPage
