import { Student } from "../../domain";
import { StudentsRepository } from "../../application/repositories";

export class InMemoryStudentRepository implements StudentsRepository {
	private __students: Map<string, Student> = new Map<string, Student>();

	async delete(id: string): Promise<void> {
		this.__students.delete(id);
	}

	async findAll(): Promise<Student[]> {
		const students: Student[] = [];

		this.__students.forEach((student) => {
			students.push(student);
		});

		return students;
	}

	async findById(id: string): Promise<Student | null> {
		return this.__students.get(id) ?? null;
	}

	async save(student: Student): Promise<Student> {
		if (!student.id) {
			student.id = `${this.__students.size + 1}`;
		}
		
		this.__students.set(student.id, student);
		
		return student;
	}
}
