//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined



//Creating an empty object
const personOne = {
    name : 'Uthpol Ghosh',
    Reg : 2021831004,
    Hall : 'bangobondhu hall',
    Dept : 'SWE'
};

console.log(personOne);
console.log(personOne['name']);

 personTwo = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
  ],
  isMarried: false,
  getFullName : function (){
      let fullname = this.firstName+ " "+ this.lastName;
      return fullname;
  }
}
console.log(personTwo);
console.log(personTwo.getFullName());

personTwo.nationality = 'Ethiopian';
personTwo.country = 'Finland';

console.log(personTwo);