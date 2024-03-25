import { Link } from 'react-router-dom'
import logo from '../../../public/bosch_logo.svg'
import Box from "@mui/material/Box"

const Bosch = () => {

    return(
        <Link to={"/homepage"}>
            <Box width={{xs: 100, sm: 100, md: 120, lg: 140, xl: 140}} sx={{ display: 'flex', alignItems: 'center' }}>
                <img width="100%" src={logo} alt="Bosch"/>
            </Box>
        </Link>
    )
}

export default Bosch