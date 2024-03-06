export class Student {
	private _id: string;
	private _name: string;
	private _enrollment: string;

	constructor(id: string, name: string, enrollment: string) {
		this._id = id;
		this._name = name;
		this._enrollment = enrollment;
	}

	get id() {
		return this._id;
	}

	set id(id: string) {
		this._id = id;
	}

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	get enrollment() {
		return this._enrollment;
	}

	set enrollment(enrollment: string) {
		this._enrollment = enrollment;
	}
}
