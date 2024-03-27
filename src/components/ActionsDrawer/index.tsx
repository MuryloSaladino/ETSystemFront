import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Divider, Drawer, List, Typography } from "@mui/material";
import { StyledCloseButton, StyledDrawerBox, StyledListItemButton } from "./styles";
import { useNavigate } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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
                    {
                        access.map((acc) => 
                            <StyledListItemButton onClick={() => navigate(acc.path)} key={acc.name}>
                                {acc.icon()}
                                <Typography variant="h5">{acc.name}</Typography>
                            </StyledListItemButton>
                        )
                    }
                    <Divider/>

                    <StyledListItemButton onClick={() => navigate("/settings")}>
                        <SettingsIcon/>
                        <Typography variant="h5">Settings</Typography>
                    </StyledListItemButton>

                    <StyledListItemButton onClick={() => logout()}>
                        <LogoutIcon/>
                        <Typography variant="h5">Logout</Typography>
                    </StyledListItemButton>
                </List>
            </StyledDrawerBox>
        </Drawer>
    )
}

export default ActionsDrawer