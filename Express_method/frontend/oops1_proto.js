const stud1 = {
    name: "Harsh",
    percentage: "84%",
    age: 18,
    printDetails: function () {
        console.log(this)
    }
};

const stud2 = {
	name: "Arsh",
	percentage: "81%",
	age: 26,
	printDetails: function () {
		console.log(this);
	},
};

const stud3 = {
	name: "Harshit",
	percentage: "74%",
	age: 20,
	printDetails: function () {
		console.log(this);
	},
};

// stud1.printDetails();

const stud4 = {
	name: "Harsh",
	percentage: "67%",
	age: 20,
	printDetails: function () {
		console.log(this);
	},
};


//  in above case we have created 4 object with the same prooperties how we can reduce this redundancy

//  prototypes
// every objects in js having its prototypes this is not a copy this is actual function

/**
let arr = [1, 2, 3, 4, 5];
arr.sayHello = () => {
	console.log("Hello Yaar!");
}
 in above case this function only present in arr not for others arr this is a copy function for only accessing in arr

let arr2 = [1, 2, 3];
 */


// __proto__(Reference)  it takes reference prototype is a object 
let arr = [1, 2, 3, 4];
arr.__proto__.push = (n) => (console.log("Pushing new element: ", n));

let arr3 = [2, 3, 4];  // reference means it is permanent change in the function

//  actual prototype: 
// Array.prototype <= this is a actual prototype object
