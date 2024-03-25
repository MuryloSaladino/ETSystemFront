import logo from '../../../public/bosch_logo.svg'
import Box from "@mui/material/Box"

const Bosch = () => {

    return(
        <Box width={{xs: 120, sm: 140, md: 160, lg: 180, xl: 200}}>
            <img width="100%" src={logo} alt="Bosch"/>
        </Box>
    )
}

export default Bosch