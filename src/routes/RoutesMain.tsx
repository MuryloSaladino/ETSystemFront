import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";

import Homepage from "../pages/homepage";
import Login from "../pages/login";

import DashboardPage from "../pages/dashboard";
import SettingsPage from "../pages/settings";

import AdminPage from "../pages/admin";

import InstructorPage from "../pages/instructor";

import StudentPage from "../pages/student";
import UsersPage from "../pages/admin/users";
import InstructorsPage from "../pages/admin/instructors";
import DisciplinesPage from "../pages/admin/disciplines";
import StudentsPage from "../pages/admin/students";
import InstitutionsPage from "../pages/admin/institutions";
import StudentGroupPage from "../pages/admin/students/StudentGroupPage";
import AppliedDisciplinePage from "../pages/admin/students/AppliedDisciplinePage";


const RoutesMain = () => {
    return (
        <Routes>
            <Route path="*" element={<Homepage/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/dashboard" element={<ProtectedRoute/>}>
                <Route index element={<DashboardPage/>}/>
            </Route>

            <Route path="/admin" element={<ProtectedRoute/>}>
                <Route index element={<AdminPage/>}/>
                <Route path="users" element={<UsersPage/>}/>
                <Route path="instructors" element={<InstructorsPage/>}/>
                <Route path="disciplines" element={<DisciplinesPage/>}/>
                <Route path="institutions" element={<InstitutionsPage/>}/>
                <Route path="students" element={<StudentsPage/>}/>
                <Route path="students/:idStudentGroup" element={<StudentGroupPage/>}/>
                <Route path="students/:idStudentGroup/:idAppliedDiscipline" element={<AppliedDisciplinePage/>}/>
            </Route>

            <Route path="/instructor" element={<ProtectedRoute/>}>
                <Route index element={<InstructorPage/>}/>
            </Route>

            <Route path="/student" element={<ProtectedRoute/>}>
                <Route index element={<StudentPage/>}/>
            </Route>

            <Route path="/settings" element={<ProtectedRoute genericUserAccess/>}>
                <Route index element={<SettingsPage/>}/>
            </Route>
        </Routes>
    );
};

export default RoutesMain