import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { StyledAppBar, StyledHeaderBox, StyledToolbar } from "./styles";

import { Bosch } from "..";
import { useContext, useState } from "react";
import { ColorsContext } from "../../context/ColorsContext";
import { UserContext } from "../../context/UserContext";
import ActionsDrawer from "../ActionsDrawer";

const CustomAppBar = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const toggleOpen = () => setOpen((prevState) => !prevState)
    const { darkMode, toggleTheme } = useContext(ColorsContext)
    const {  } = useContext(UserContext)
    

    return(
        <>
            <ActionsDrawer open={open} toggleOpen={toggleOpen}/>

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