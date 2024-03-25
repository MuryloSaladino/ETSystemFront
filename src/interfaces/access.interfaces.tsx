import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';


export interface IAccess {
    name: string;
    icon: JSX.Element;
    path: string;
}

export const studentAccess:IAccess = {
    name: "Student",
    icon: <BackpackIcon/>,
    path: "/dashboard/student"
}
export const adminAccess:IAccess = {
    name: "Administrator",
    icon: <AdminPanelSettingsIcon/>,
    path: "/dashboard/admin"
} 
export const instructorAccess:IAccess = {
    name: "Instructor",
    icon: <SchoolIcon/>,
    path: "/dashboard/instructor"
}