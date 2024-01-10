// TASK 5
interface DirectorInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workDirectorTasks: () => string;
}

interface TeacherInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home";
	}
	getCoffeeBreak() {
		return "Getting a coffee break";
	}
	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}
	getCoffeeBreak() {
		return "Cannot have a break";
	}
	workTeacherTasks() {
		return "Getting to work";
	}
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

// TASK 6
function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
	return employee instanceof Director;
}
function executeWork(employee: DirectorInterface | TeacherInterface) {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}
