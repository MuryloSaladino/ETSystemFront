import { Card, CardActionArea, CardHeader, Container, Grid } from "@mui/material"
import { IAccess } from "../../interfaces"
import { useNavigate } from "react-router-dom"

interface INavigationGridProps {
    navigationItems: IAccess[]
}

const NavigationGrid = ({navigationItems}:INavigationGridProps) => {

    const navigate = useNavigate()

    return(
        <Container maxWidth="md">
            <Grid container spacing={2}>
            {
                navigationItems.map(item =>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Card variant="outlined">
                                <CardActionArea onClick={() => navigate(item.path)} sx={{display:"flex"}}>
                                    <CardHeader title={item.name}/>
                                    {item.icon("small")}
                                </CardActionArea>
                            </Card> 
                        </Grid>
                )
            }
            </Grid>
        </Container>
    )
}

export default NavigationGrid