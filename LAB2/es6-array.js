const cars = ["Toyota","Honda","Mazda"]
const fruits = [];
fruits[0] = "Apple"
fruits[3] = "Mango"
const rname = new Array ("win","jphn","james");
console.log(fruits);


const carPop = cars.pop();
console.log(carPop);
console.log(cars);

cars.push("Kubota");
console.log(cars);

const carShift = cars.shift();
console.log(carShift);
console.log(cars);

cars.unshift("Mazda");
console.log(cars);

const slideArr = cars.slice(0,2);
console.log(slideArr);
