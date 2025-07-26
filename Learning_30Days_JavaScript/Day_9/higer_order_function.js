// Callback Function = accept or return a function as parameter
const square = (n ) => {
    return n * n;
}

const cube = (square , n)=>{
   return square(n) * n;
}

console.log(cube(square,4))


const numbers = [2, 5, 6, 7,81, 34];

const FindSum = (number)=>{
    let sum = 0;

    /*const callback = (ele)=>{
      sum  += ele;
    }

    number.forEach(callback); */

     number.forEach((ele)=>{
        sum += ele;
     });

    return sum;
}

console.log(FindSum(numbers))

//Setting time in JS 
const printHello = () =>{
    console.log("Print callback");
}

//setInterval(printHello,2000)
setTimeout(printHello,3000);

setTimeout(()=>{
 console.log("print callback 2");
},3000);


//forEach((ele,index,arr)=>{...})

const arr = [22,33,12,11,33,44,55,23,1,90];
const ans = 0;
arr.forEach((ele, i, arr)=>{
   console.log(`The arr ${i}th Index contain the ${ele} value`);
   console.log(arr);
})

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

countries.forEach((ele,index,countries)=>{
    console.log(ele.toUpperCase());
})


//arr.map((ele,index, arr)={....}) return a new array

const new_countries = countries.map((ele)=>{
    return ele.toLowerCase();
})

console.log(new_countries);

//filter((ele,index, arr)={....}) = return a new array and filter elements on given condition

const new_arr = arr.filter((ele,index,arry)=>{
    if(ele%2==0){
        return ele;
    }
})

console.log(new_arr);

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const new_scores = scores.filter((element)=>{
    return element.name.endsWith('a');
})
console.log(new_scores);

//arr.every(ele,index, arr)={....} = Check if all the elements are similar in one aspect. It returns boolean

const checkArray =new_arr.every( ele =>{
   return ele%2==0;
})

if(checkArray){
    console.log("Even array");
}
else{
    console.log("Odd Array");
}

//find: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

//Sort
// a - b: if result is negative, a comes first → ascending

// b - a: if result is negative, b comes first → descending

//String sorting
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) 

//Numbers Sorting
console.log(arr.sort((a,b)=>{
    return a - b;
}))


//object sorting
const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Rrook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users)