class Person {
    constructor(name, age) {
        console.log("Person class constructor called!")
		this.name = name;
		this.age = age;
	}
	talk() {
		console.log(`Hello ${this.name} your Welcome!`);
	}
}

class Student extends Person {
	constructor(name, age, marks) {
		console.log("Student class constructor called!");
		super(name, age); // parent class constructor being called in this case parent class constructor is called
		this.marks = marks;
	}
}

class Teacher extends Person{
    constructor(name, age, subject) {
        console.log("Teacher class constructor called!");
        super(name, age);
        this.subject = subject;
    }
}

let stud = new Student("Harsh", 1, 90);