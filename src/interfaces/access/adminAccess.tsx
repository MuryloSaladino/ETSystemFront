import IAccess from "./access";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Person2Icon from '@mui/icons-material/Person2';
import ClassIcon from '@mui/icons-material/Class';
import GroupsIcon from '@mui/icons-material/Groups';


export const adminDisciplinesAccess:IAccess = {
    name: "Disciplines",
    path: "/admin/disciplines",
    icon: <LibraryBooksIcon/>
}

export const adminInstitutionsAccess:IAccess = {
    name: "Institutions",
    path: "/admin/institutions",
    icon: <CorporateFareIcon/>
}

export const adminInstructorsAccess:IAccess = {
    name: "Instructors",
    path: "/admin/instructors",
    icon: <Person2Icon/>
}

export const adminStudentsAccess:IAccess = {
    name: "Students",
    path: "/admin/students",
    icon: <ClassIcon/>
}

export const adminUsersAccess:IAccess = {
    name: "Users",
    path: "/admin/users",
    icon: <GroupsIcon/>
}