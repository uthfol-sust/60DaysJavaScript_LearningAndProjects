//preemative data types
let lan ='javaScript';

lan[0] =  'Y' //  Strings are immutable in JavaScript, so this will not change the first character
console.log(lan);

let num1 = 10;
let num2 = 20;
console.log(num1==num2); // false
console.log(num1!=num2); // true

let word = 'hello';
console.log(lan==word);

//non-primitive data types
let arr =[10,2,30,50,4];
console.log( "Before modify: ", arr); // [10, 2, 30, 50, 4]

arr[3]=-10; //mutable
console.log("After modify",arr); // [10, 2, 30, -10, 4]

let obj1 = {
    name: 'John',
    age: 30,
    isStudent: false
};
console.log("Before modify: ", obj1); // { name: 'John', age:                            

let obj2 = {
    name: 'John',
    age: 30,
    isStudent: false
};

console.log(obj1 == obj2); // false, because they are different objects in memory


let str = " false, because they are different objects in memory"

let val = 2.72;

//method
console.log(Math.round(2.72));

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.split(" "));
console.log(str.trim());