let age = prompt("enter your age")
myAge = 24;

if(age > myAge){
    console.log(`You are ${age-myAge} Years older than me`);
}
else if(age<myAge){
    console.log(`You are ${myAge - age} Years smaller than me`);
}
else{
    console.log("We are of the same age")
}


let a = 10;
let b = 20;

let str = a > b
  ? `${a} is greater than ${b}`
  : `${b} is greater than ${a}`;

console.log(str);
