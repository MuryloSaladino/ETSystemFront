import { Drawer, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { StyledAppBar, StyledDrawerBox, StyledHeaderBox, StyledToolbar } from "./styles";

import { Bosch } from "..";
import { useContext, useState } from "react";
import { ColorsContext } from "../../context/ColorsContext";

const CustomAppBar = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const toggleOpen = () => setOpen((prevState) => !prevState)
    const { darkMode, toggleTheme } = useContext(ColorsContext)
    

    return(
        <>
            <Drawer open={open} onClose={toggleOpen}>
                <StyledDrawerBox>
                    <IconButton onClick={toggleOpen} sx={{ position:"absolute", top:"10px", right: "10px" }}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h5">This is a drawer</Typography>
                </StyledDrawerBox>
            </Drawer>

            <StyledAppBar>
                <StyledToolbar>
                    <StyledHeaderBox>
                        <IconButton onClick={toggleOpen}>
                            <MenuIcon/>
                        </IconButton>
                        <Bosch/>
                    </StyledHeaderBox>
                    <IconButton onClick={toggleTheme}>
                        {darkMode ? <DarkModeIcon sx={{color: "#f8f8f8"}}/> : <LightModeIcon/>}
                    </IconButton>
                </StyledToolbar>
            </StyledAppBar>
        </>
    )
}

export default CustomAppBar