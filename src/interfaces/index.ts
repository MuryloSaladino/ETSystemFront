import IAccess from "./access/access.ts"
import { 
    IUser,
    IUserGrouped,
    IAdministrator,
    IStudent,
    IInstructor,
    IInstructorGrouped
} from "./user.ts";
import {
    IInstitution
} from "./institution.ts";
import {
    IStudentGroup,
    IStudentGroupGrouped,
    IStudentResponseStudentGroup
} from "./studentGroup.ts";
import {
    IDisciplineCategory
} from "./disciplineCategory.ts";
import {
    IDiscipline,
    IDisciplineGrouped
} from "./discipline.ts";
import {
    ICompetence
} from "./competence.ts";
import {
    ICompetenceGroup
} from "./competenceGroup.ts";
import {
    IAppliedDiscipline,
    IAppliedDisciplineGrouped
} from "./appliedDiscipline.ts";
import {
    IStudentAvaliation,
    IStudentAvaliationGrouped
} from "./studentAvaliation.ts";
import {
    IPaginated
} from "./paginated.ts";
import {
    studentAccess,
    adminAccess,
    instructorAccess
} from "./access/loggedUserAcess.tsx";
import {
    adminDisciplinesAccess,
    adminInstitutionsAccess,
    adminInstructorsAccess,
    adminStudentsAccess,
    adminUsersAccess
} from "./access/adminAccess.tsx";


export type {
    IUser,
    IUserGrouped,
    IAccess,
    IInstitution,
    IPaginated,
    IAdministrator,
    IStudent,
    IInstructor,
    IStudentGroup,
    IStudentGroupGrouped,
    IDisciplineCategory,
    IDiscipline,
    IDisciplineGrouped,
    ICompetence,
    ICompetenceGroup,
    IAppliedDiscipline,
    IAppliedDisciplineGrouped,
    IStudentResponseStudentGroup,
    IInstructorGrouped,
    IStudentAvaliation,
    IStudentAvaliationGrouped
};

export {
    adminAccess, 
    instructorAccess, 
    studentAccess,
    adminDisciplinesAccess,
    adminInstitutionsAccess,
    adminInstructorsAccess,
    adminStudentsAccess,
    adminUsersAccess,
};