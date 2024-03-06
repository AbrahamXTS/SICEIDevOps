import { Request, Response } from "express";
import { StudentsService } from "../../application/services";

export class StudentsController {
	private studentsService: StudentsService;

	constructor(studentsService: StudentsService) {
		this.studentsService = studentsService;
	}

	async getStudents(req: Request, res: Response) {
		const students = await this.studentsService.getStudents();

		res.status(200).json(students);
	}

	async createStudent(req: Request, res: Response) {
		const student = await this.studentsService.saveStudent(req.body);

		res.status(201).json(student);
	}

	async updateStudent(req: Request, res: Response) {
		const student = await this.studentsService.updateStudent(
			req.body.id,
			req.body,
		);

		res.status(200).json(student);
	}

	async deleteStudent(req: Request, res: Response) {
		await this.studentsService.deleteStudent(req.params.id);

		res.status(204).send();
	}
}
