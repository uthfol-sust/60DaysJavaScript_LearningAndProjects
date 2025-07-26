const companies = new Set()
console.log(companies);
 

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies)
console.log(companies.size);

//deleting elements
companies.delete('Google')
console.log(companies.size) ;

//checking elements in set

console.log(companies.has('Amazon'));

//clear set
companies.clear()
console.log(companies);


//map
const map = new Map();
console.log(map);

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];

const newMap = new Map(countries);
console.log(newMap.size);
console.log(newMap);

//adding value
newMap.set("Bangladesh", "Dhaka");
newMap.set('Swed', 'Stockh')
newMap.set('Swed', 'Stockh')
console.log(newMap)


//get value from map
console.log(newMap.get("Bangladesh"));

//get key from value

console.log(newMap.has("Bangladesh"));


newMap.forEach((elements, key, map)=>{
    console.log(`Key: ${key} , Value: ${elements}`)
})

