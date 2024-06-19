class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //  by default it is a prototype object function
    talk() {
        console.log("Hello ", this.name, " Your welcome!");
    }
}

let p1 = new Person("Harsh", 1);

// console.log(p1);



