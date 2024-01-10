interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Yassine",
	lastName: "Ait Mensour",
	age: 33,
	location: "Morocco",
};
const student2: Student = {
	firstName: "Youssef",
	lastName: "Ait Mensour",
	age: 31,
	location: "Morocco",
};

const studentsList: Array<Student> = [student1, student2];

// Render table
const table: HTMLElement = document.createElement("table");

studentsList.forEach((student) => {
	const tr: HTMLElement = document.createElement("tr");
	const td1: HTMLElement = document.createElement("td");
	const td2: HTMLElement = document.createElement("td");

	td1.textContent = student.firstName;
	td2.textContent = student.location;

	tr.append(td1);
	tr.append(td2);
	table.append(tr);
});
document.body.append(table);
