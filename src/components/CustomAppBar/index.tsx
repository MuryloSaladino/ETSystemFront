import { Drawer, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, StyledDrawerBox, StyledToolbar } from "./styles";
import { Bosch } from "..";
import { useState } from "react";

const CustomAppBar = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const toggleOpen = () => setOpen((prevState) => !prevState)
    

    return(
        <>
            <Drawer open={open} onClose={toggleOpen}>
                <StyledDrawerBox>
                    <Typography variant="h5">This is a drawer</Typography>
                </StyledDrawerBox>
            </Drawer>
            <StyledAppBar>
                <StyledToolbar>
                    
                    <IconButton onClick={toggleOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Bosch/>
                </StyledToolbar>
            </StyledAppBar>
        </>
    )
}

export default CustomAppBar