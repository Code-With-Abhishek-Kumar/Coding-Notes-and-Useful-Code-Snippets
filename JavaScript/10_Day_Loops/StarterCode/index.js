// for (Start; end ; change) {
//     // const element = array[index];
    
// }


console.log('For Loop')

console.log("for loop 25 - 50 :-")
for (let index = 0; index < 51; index++) {
    console.log(index) 
    
}

// // 35 - 40

console.log("for loop 35 - 40")

for (let index = 35; index < 41; index++) {
    console.log(index) 
    
}


console.log("for loop 20 - 5 :-")
for (let index = 20; index > 6; index--) {
    console.log(index) 
    
}


console.log("for loop array :-")
let fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}




// */

console.log("while loop : - 1 to 5")

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}



console.log("while loop : 45 - 35")

var i = 45;
while (i > 34) {
    console.log(i);
    i--;
}


console.log("while loop : 45 - 80")

var i = 45;
while (i < 80) {
    i++;
    console.log(i);
}



// // Glory with loops
// // Try to create basic loop Structure








// For in is use to an Object


console.log('for in loop obj of person')


const person = {
    name: "John",
    age: 30,
    profession: "Developer"
};

console.log("Properties of the person object:");

for (let key in person) {
    console.log(key + ": " + person[key]);
}




console.log('for of loop array of car')

const cars = [
    { brand: "Toyota", model: "Camry", year: 2020 },
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Fusion", year: 2021 }
];

console.log("List of Cars:");

for (let car of cars) {
    console.log(car.brand, car.model, car.year);
}