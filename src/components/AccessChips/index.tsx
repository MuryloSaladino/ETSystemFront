import { Chip, Stack } from "@mui/material"
import { IUserGrouped } from "../../interfaces"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';

interface IAccessChipsProps {
    user: IUserGrouped
} 

const AccessChips = ({user}:IAccessChipsProps) => {

    return(
        <Stack flexDirection="row" gap={1} alignItems="center" height="100%">
            {
                user.idAdministrator &&
                <Chip icon={<AdminPanelSettingsIcon/>} label="Administrator"></Chip> 
            }
            {
                user.idInstructor &&
                <Chip icon={<SchoolIcon/>} label="Instructor"></Chip> 
            }
            {
                user.idStudent &&
                <Chip icon={<BackpackIcon/>} label="Student"></Chip> 
            }
        </Stack>
    )
}

export default AccessChips