import { Router } from "express";

import { studentsController } from "../dependencies";

export const studentsRouter = Router();

studentsRouter.get("/", (req, res) => {
	studentsController.getStudents(req, res);
});

studentsRouter.post("/", (req, res): void => {
	studentsController.createStudent(req, res);
});

studentsRouter.put("/", (req, res): void => {
	studentsController.updateStudent(req, res);
});

studentsRouter.delete("/:id", (req, res): void => {
	studentsController.deleteStudent(req, res);
});
