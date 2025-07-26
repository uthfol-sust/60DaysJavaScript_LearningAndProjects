//Destructing Arrays

 const numbers = [1, 2, 3];

 const [a , b , c ] = numbers;
 console.log(a, b, c);

 const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

const [frontend, backend] = fullStack;

console.log(frontend);
console.log(backend);


const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) ;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, num3, , ...remaining]= nums; //skip 4
console.log(num1, num2, num3);
console.log(remaining);


const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

countries.forEach(([country, city],index)=>{
   console.log(`${index+1} Rank Country Name: ${country} , City: ${city}`);
})


//Destructuring Object

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter);


//Spread or Rest Operator
const count = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = count

console.log(gem)
console.log(fra)
console.log(nordicCountries)

//Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)