import { Student } from "../../domain/models";
import { StudentsRepository } from "../repositories";

export class StudentsService {
	private studentRepository: StudentsRepository;

	constructor(studentRepository: StudentsRepository) {
		this.studentRepository = studentRepository;
	}

	public async deleteStudent(id: string) {
		await this.studentRepository.delete(id);
	}

	public async getStudents() {
		return await this.studentRepository.findAll();
	}

	public async saveStudent(student: Student) {
		return await this.studentRepository.save(student);
	}

	public async updateStudent(id: string, student: Student) {
		const studentToUpdate = await this.studentRepository.findById(id);

		if (!studentToUpdate) {
			throw new Error("Student requested not found");
		}

		return await this.studentRepository.save(student);
	}
}
