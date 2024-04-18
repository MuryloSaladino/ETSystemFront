import { 
    createUser,
    createAdmin,
    createInstructor,
    createStudent,
    deleteUser,
    retrieveUser,
    retrieveUsers,
    updateUser,
    retrieveInstructors,
} from "./user";

import {
    createInstitution,
    deleteInstitution,
    retrieveInstitutions,
    updateInstitution,
} from "./institution";

import {
    retrieveAppliedDiscipline,
    createAppliedDiscipline,
    deleteAppliedDiscipline,
    retrieveAppliedDisciplines,
    updateAppliedDiscipline,
} from "./appliedDisciplines";

import {
    createCompetenceGroup,
    deleteCompetenceGroup,
    updateCompetenceGroup,
} from "./competenceGroup";

import {
    createCompetence,
    deleteCompetence,
    updateCompetence,
} from "./competence";

import {
    retrieveDisciplineCategories,
    createDisciplineCategory,
    deleteDisciplineCategory,
    updateDisciplineCategory,
} from "./disciplineCategory";


export {
    createUser,
    createAdmin,
    createInstructor,
    createStudent,
    deleteUser,
    retrieveUser,
    retrieveUsers,
    updateUser,
    retrieveInstructors,
    createInstitution,
    deleteInstitution,
    retrieveInstitutions,
    updateInstitution,
    retrieveAppliedDiscipline,
    createAppliedDiscipline,
    deleteAppliedDiscipline,
    retrieveAppliedDisciplines,
    updateAppliedDiscipline,
    createCompetenceGroup,
    deleteCompetenceGroup,
    updateCompetenceGroup,
    createCompetence,
    deleteCompetence,
    updateCompetence,
    retrieveDisciplineCategories,
    createDisciplineCategory,
    deleteDisciplineCategory,
    updateDisciplineCategory,
}