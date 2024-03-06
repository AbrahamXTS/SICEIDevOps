import { Student } from "../../domain";

export interface StudentsRepository {
	delete(id: string): Promise<void>;
	findAll(): Promise<Student[]>;
	findById(id: string): Promise<Student | null>;
	save(student: Student): Promise<Student>;
}
