import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Avatar, Divider, Drawer, List, Stack, Typography } from "@mui/material";
import { StyledCloseButton, StyledDrawerBox, StyledListItemButton } from "./styles";
import { useNavigate } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AppToast from "../../utils/AppToast";

interface IActionsDrawerProps {
    open: boolean;
    toggleOpen: () => void
}

const ActionsDrawer = ({ open, toggleOpen }:IActionsDrawerProps) => {

    const { access, logout, user } = useContext(UserContext)
    const navigate = useNavigate()

    return(
        <Drawer open={open} onClose={toggleOpen}>
            <StyledDrawerBox>
                <StyledCloseButton onClick={toggleOpen}>
                    <CloseIcon/>
                </StyledCloseButton>
                <List>
                    {
                        user &&
                        <Stack alignItems="center" gap={1} margin={1}>
                            <Avatar
                                children={`${user.username[0]}${user.username[1]}`.toUpperCase()}
                                sx={{ bgcolor: "primary.main", width: 50, height: 50 }}
                            />
                            <Typography variant="h5">{user.name || user.username}</Typography>
                            <Typography variant="h6">{user.institution.name}</Typography>
                        </Stack>
                    }
                    <Divider/>
                    <StyledListItemButton 
                        onClick={() => { navigate("/dashboard"); toggleOpen(); }}>
                        {<HomeIcon/>}
                        <Typography variant="h5">{"Dashboard"}</Typography>
                    </StyledListItemButton>
                    {
                        access.map((acc) => 
                            <StyledListItemButton 
                                onClick={() => { navigate(acc.path); toggleOpen(); }} key={acc.name}>
                                {acc.icon}
                                <Typography variant="h5">{acc.name}</Typography>
                            </StyledListItemButton>
                        )
                    }
                    <Divider/>

                    <StyledListItemButton onClick={() => { navigate("/settings"); toggleOpen(); }}>
                        <SettingsIcon/>
                        <Typography variant="h5">Settings</Typography>
                    </StyledListItemButton>

                    <StyledListItemButton onClick={() => { logout(); AppToast.notify("Logged out") }}>
                        <LogoutIcon/>
                        <Typography variant="h5">Logout</Typography>
                    </StyledListItemButton>
                </List>
            </StyledDrawerBox>
        </Drawer>
    )
}

export default ActionsDrawer