import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Divider, Drawer, List, Typography } from "@mui/material";
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

    const { access, logout } = useContext(UserContext)
    const navigate = useNavigate()

    return(
        <Drawer open={open} onClose={toggleOpen}>
            <StyledDrawerBox>
                <StyledCloseButton onClick={toggleOpen}>
                    <CloseIcon/>
                </StyledCloseButton>
                <List>
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