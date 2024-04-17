import { ETSystemAPI } from "./APIs";
import {
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
const instructorService = new InstructorService(ETSystemAPI);
const studentAvaliationService = new StudentAvaliationService(ETSystemAPI);

export {
    studentGroupService,
    disciplineCategoryService,
    disciplineService,
    competenceService,
    instructorService,
    studentAvaliationService
};