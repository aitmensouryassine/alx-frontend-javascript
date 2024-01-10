// TASK 1
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

// TASK 2
interface Directors extends Teacher {
	numberOfReports: number;
}

// TASK 3
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function (firstName, lastName) {
	return firstName[0] + ". " + lastName;
};

// TASK 4
interface StudentClassConstructorInterface {
	new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
	firstName: string;
	lastName: string;

	workOnHomework: () => string;
	displayName: () => string;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return "Currently working";
	}

	displayName() {
		return this.firstName;
	}
}
