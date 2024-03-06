import { StudentsController } from "./controllers";
import { InMemoryStudentRepository } from "./repositories";

import { StudentsService } from "../application/services";

const studentsRepository = new InMemoryStudentRepository();
const studentsService = new StudentsService(studentsRepository);
const studentsController = new StudentsController(studentsService);

export { studentsController };
