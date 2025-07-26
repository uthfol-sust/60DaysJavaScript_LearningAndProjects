let arr = [1, 2, 3, 4, 5];
arr[2]= -10;
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];
arr2[2] = -10; // This will throw an error because arr2 is a constant
// arr2 = [6, 7, 8]; // Uncommenting this line will also throw an error
console.log(arr2);


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

//exerecise 1
const num =Array(5).fill(2);
console.log(num);
num.push(3);
console.log(num.length);
console.log(num[0]);
console.log(num[num.length - 1]);


const countries = [
  'Germany',
  'Japan',
  'Bolivia',
  'Canada',
  'Denmark',
  'Finland',
  'Ethiopia',
  'Albania',
  'Hungary',
  'Ireland',
  'Kenya'
]

console.log(countries.length);
console.log(countries.sort());
console.log(countries.reverse());
console.log(countries.slice(0, 2));


export { arr, arr2, webTechs, num, countries };



