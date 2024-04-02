import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';
import IAccess from './access';


export const studentAccess:IAccess = {
    name: "Student",
    path: "/student",
    icon: <BackpackIcon/>
}
export const adminAccess:IAccess = {
    name: "Administrator",
    path: "/admin",
    icon: <AdminPanelSettingsIcon/>
} 
export const instructorAccess:IAccess = {
    name: "Instructor",
    path: "/instructor",
    icon: <SchoolIcon/>
}