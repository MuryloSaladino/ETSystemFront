import { ETSystemAPI } from "./APIs";
import {
    DisciplineService,
    InstructorService,
    StudentAvaliationService,
    StudentGroupService
    
} from "./classes";

const studentGroupService = new StudentGroupService(ETSystemAPI);
const disciplineService = new DisciplineService(ETSystemAPI);
const instructorService = new InstructorService(ETSystemAPI);
const studentAvaliationService = new StudentAvaliationService(ETSystemAPI);

export {
    studentGroupService,
    disciplineService,
    instructorService,
    studentAvaliationService
};