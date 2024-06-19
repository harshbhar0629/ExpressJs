// // A special type of funtion which can create a or return another object and function

// function makeObj(age, name, talk) {
//     return {
//         name: name,
//         age: age,
//         talk: () => {
//             let str = "Eligible to talk";
//             if (talk === false) str = "Not " + str;
//             console.log(str);
//         }
//     };
// }

// let obj = makeObj(1, "Harsh", true);
// let obj2 = makeObj(2, "Hii", false);


// Optimised of factory function 
function makeObjOpt(age, name) {
    this.name = name;
    this.age = age;
}

makeObjOpt.prototype.talk = function() {
    console.log(`Hello ${this.name} Your welcome!`);
}
// both can access prototype property

let obj1 = new makeObjOpt(1, "harsh");
let obj2 = new makeObjOpt(2, "Hello");