interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Lucile',
	lastName: 'Deleforge',
	age: 41,
	location: 'Lille',
};

const student2: Student = {
	firstName: 'Simon',
	lastName: 'Schittecatte',
	age: 38,
	location: 'Lille',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((row) => {
	let tr = table.insertRow();
	for (let [key, value] of Object.entries(row)) {
		if (key !== 'lastName' && key !== 'age') {
			let td = tr.insertCell();
			td.innerText = value;
		}
	}
})
document.body.appendChild(table);
