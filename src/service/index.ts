import { ETSystemAPI } from "./APIs";
import {
    AppliedDisciplineService,
    CompetenceGroupService,
    CompetenceService,
    DisciplineCategoryService,
    DisciplineService,
    InstructorService,
    StudentAvaliationService,
    StudentGroupService
    
} from "./classes";

const studentGroupService = new StudentGroupService(ETSystemAPI);
const disciplineCategoryService = new DisciplineCategoryService(ETSystemAPI);
const disciplineService = new DisciplineService(ETSystemAPI);
const competenceService = new CompetenceService(ETSystemAPI);
const competenceGroupService = new CompetenceGroupService(ETSystemAPI);
const appliedDisciplineService = new AppliedDisciplineService(ETSystemAPI);
const instructorService = new InstructorService(ETSystemAPI);
const studentAvaliationService = new StudentAvaliationService(ETSystemAPI);

export {
    studentGroupService,
    disciplineCategoryService,
    disciplineService,
    competenceService,
    competenceGroupService,
    appliedDisciplineService,
    instructorService,
    studentAvaliationService
};