import IAccess from "./access/access.ts"
import { 
    IUser,
    IUserGrouped,
    IAdministrator,
    IStudent,
    IInstructor,
} from "./entities/user.ts";
import {
    IInstitution
} from "./entities/institution.ts";
import {
    IStudentGroup,
    IStudentGroupGrouped,
    IStudentResponseStudentGroup
} from "./entities/studentGroup.ts";
import {
    IDisciplineCategory
} from "./entities/disciplineCategory.ts";
import {
    IDiscipline,
} from "./entities/discipline.ts";
import {
    ICompetence
} from "./entities/competence.ts";
import {
    ICompetenceGroup
} from "./entities/competenceGroup.ts";
import {
    IAppliedDiscipline,
    IAppliedDisciplineGrouped
} from "./entities/appliedDiscipline.ts";
import {
    IStudentAvaliation,
    IStudentAvaliationGrouped
} from "./entities/studentAvaliation.ts";
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
    ICompetence,
    ICompetenceGroup,
    IAppliedDiscipline,
    IAppliedDisciplineGrouped,
    IStudentResponseStudentGroup,
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