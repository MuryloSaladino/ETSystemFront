import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Drawer, IconButton, List, ListItemButton, Typography } from "@mui/material";
import { StyledDrawerBox } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";

interface IActionsDrawerProps {
    open: boolean;
    toggleOpen: () => void
}

const ActionsDrawer = ({ open, toggleOpen }:IActionsDrawerProps) => {

    const { access } = useContext(UserContext)
    const navigate = useNavigate()

    return(
        <Drawer open={open} onClose={toggleOpen}>
            <StyledDrawerBox>
                <IconButton onClick={toggleOpen} sx={{ position:"absolute", top:"10px", right: "10px" }}>
                    <CloseIcon/>
                </IconButton>
                <List>
                    {
                        access.map((acc) => 
                            <ListItemButton onClick={() => navigate(acc.path)} sx={{display:"flex",gap:2}}>
                                {acc.icon}
                                <Typography variant="h5">
                                    {acc.name}
                                </Typography>
                            </ListItemButton>
                        )
                    }
                </List>
            </StyledDrawerBox>
        </Drawer>
    )
}

export default ActionsDrawer