import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';

export interface IAccess {
    name: string;
    path: string;
    icon: JSX.Element;
}

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