import { Avatar, Container, IconButton, Stack } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { StyledAppBar, StyledToolbar } from "./styles";

import { Bosch } from "..";
import { useContext, useState } from "react";
import { ColorsContext } from "../../context/ColorsContext";
import ActionsDrawer from "../ActionsDrawer";
import { UserContext } from "../../context/UserContext";

const CustomAppBar = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const toggleOpen = () => setOpen((prevState) => !prevState)
    const { darkMode, toggleTheme } = useContext(ColorsContext)
    const { user } = useContext(UserContext)

    return(
        <>
            <ActionsDrawer open={open} toggleOpen={toggleOpen}/>

            <StyledAppBar color="default">
                <Container maxWidth="xl">
                    <StyledToolbar>
                        <Stack flexDirection="row" gap={1} alignItems="center">
                            {
                                user &&
                                <IconButton>
                                    <Avatar
                                        children={`${user.username[0]}${user.username[1]}`.toUpperCase()}
                                        sx={{ bgcolor: "primary.main" }}
                                        onClick={toggleOpen}
                                    />
                                </IconButton>
                            }
                            <IconButton onClick={toggleTheme}>
                                {darkMode ? <DarkModeIcon/> : <LightModeIcon/>}
                            </IconButton>
                        </Stack>
                        <Bosch/>
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </>
    )
}

export default CustomAppBar