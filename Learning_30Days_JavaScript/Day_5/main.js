import {arr, arr2, webTechs, num, countries} from './array.js';

console.log(arr);
console.log(arr2);
console.log(webTechs);      
console.log(num);
console.log(countries);


let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(' ');
console.log(words)
console.log(words.length)


console.log(words.sort());
console.log(words.reverse());

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)