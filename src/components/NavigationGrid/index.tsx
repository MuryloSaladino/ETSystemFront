import { Card, CardActionArea, CardHeader, Grid } from "@mui/material"
import { IAccess } from "../../interfaces"
import { useNavigate } from "react-router-dom"

interface INavigationGridProps {
    navigationItems: IAccess[]
}

const NavigationGrid = ({navigationItems}:INavigationGridProps) => {

    const navigate = useNavigate()

    return(
        <Grid container>
        {
            navigationItems.map(item =>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={item.name} padding={1}>
                    <Card variant="outlined">
                        <CardActionArea onClick={() => navigate(item.path)} sx={{display:"flex"}}>
                            <CardHeader title={item.name}/>
                            {item.icon}
                        </CardActionArea>
                    </Card> 
                </Grid>
            )
        }
        </Grid>
    )
}

export default NavigationGrid