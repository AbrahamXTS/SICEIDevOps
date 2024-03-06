import { Router } from "express";

import { studentsController } from "../dependencies";

export const studentsRouter = Router();

studentsRouter.get("/", (req, res) => {
	studentsController.getStudents(req, res);
});

studentsRouter.post("/", (req, res) => {
	studentsController.createStudent(req, res);
});

studentsRouter.put("/", (req, res) => {
	studentsController.updateStudent(req, res);
});

studentsRouter.delete("/:id", (req, res) => {
	studentsController.deleteStudent(req, res);
});
