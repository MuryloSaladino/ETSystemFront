import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import BackpackIcon from '@mui/icons-material/Backpack';

type TIconSize = "small"|"inherit"|"large"|"medium";

export interface IAccess {
    name: string;
    icon: (size?:TIconSize) => JSX.Element;
    path: string;
}

export const studentAccess:IAccess = {
    name: "Student",
    icon: (size:TIconSize = "small") => <BackpackIcon fontSize={size}/>,
    path: "/dashboard/student"
}
export const adminAccess:IAccess = {
    name: "Administrator",
    icon: (size:TIconSize = "small") => <AdminPanelSettingsIcon fontSize={size}/>,
    path: "/dashboard/admin"
} 
export const instructorAccess:IAccess = {
    name: "Instructor",
    icon: (size:TIconSize = "small") => <SchoolIcon fontSize={size}/>,
    path: "/dashboard/instructor"
}