import { ETSystemAPI } from "./APIs";
import {
    InstructorService,
    StudentAvaliationService,
    StudentGroupService
    
} from "./classes";

const studentGroupService = new StudentGroupService(ETSystemAPI);
const instructorService = new InstructorService(ETSystemAPI);
const studentAvaliationService = new StudentAvaliationService(ETSystemAPI);

export {
    studentGroupService,
    instructorService,
    studentAvaliationService
};