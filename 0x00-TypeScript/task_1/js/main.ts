export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string) : string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

interface StudentsClassConstructor {
	new(firstname: string, lastName: string) : StudentClassInterface;
}

const StudentClass: StudentsClassConstructor = class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);
const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
console.log(director1);
console.log(printTeacher("John", "Doe"))

const clas = new StudentClass('John', 'Doe');
console.log(clas.displayName());
console.log(clas.workOnHomework())
