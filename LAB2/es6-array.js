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

const conCatArr = cars.concat(rname);
console.log(conCatArr.toString());

//spread opreator
const CatArr = [...cars,...rname];
console.log(CatArr);

//itreation
const keys = cars.keys();
let text = "";
for (x of keys){
    text += x;
}
console.log(text);

cars.forEach(cat);
function cat(value, index, Array){
    text += value;
}
console.log(text);

cars.map(addVal)
function addVal (value) {
  return value + "<br>"
}

const numbers = [10,20,30];
const over10 = numbers.filter(over10fn);
function over10fn(value){
    return value > 10;
}
console.log(over10);

let sum = numbers.reduce(addFn);
function addFn(total,value){
    return total + value;
}
console.log(sum);

let boolOver10 = numbers.every(over10fn);
console.log(boolOver10);
boolOver10 = numbers.some(over10fn);
console.log(boolOver10);

let first = numbers.find(over10fn);
console.log(first);
let firstkey = numbers.findIndex(over10fn);
console.log(firstkey);

const alphabat = Array.from("ABCDEF");
console.log(alphabat);