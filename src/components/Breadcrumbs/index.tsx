import { Breadcrumbs } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const AppBreadcrumbs = () => {

    console.log(window.location.href)

    return(
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>

        </Breadcrumbs>
    )
}

export default AppBreadcrumbs