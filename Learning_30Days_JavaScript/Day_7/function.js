//Function Declaration
function fullName(){
    console.log("My name is Uthpol Ghosh")
}


function getDetails( name, age, roll){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Roll: " + roll);
    return "Details Printed Successfully";
}

fullName()
console.log(getDetails("Uthpol Ghosh", 24, 2021831004));

//Function Expression or Anonymous Function
const userInfoRole = function(role){
    console.log(`User Role: ${role}`);
}

const getUserDeatails = function(name, age, countery,city, contact){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Country: " + countery);
    console.log("City: " + city);
    console.log("Contact: " + contact);
    return "User Details Printed Successfully";
}

userInfoRole("Admin");
console.log(getUserDeatails("Uthpol Ghosh", 24, "India", "Kolkata", 9876543210));

//Arrow Function
const userInfo = () =>{
    console.log("User Info: Uthpol Ghosh");
}


const getUserInfoDetails =(name, age, country='Banladesh',city="sylhet", contact='') =>{
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Country: " + country);
    console.log("City: " + city);
    if(contact === ''){
        contact = 'No Contact Provided';
    }
    else{
        console.log("Contact: " + contact);
    }
    return "User Info Details Printed Successfully";
}

userInfo();

console.log(getUserInfoDetails("Uthpol Ghosh"));  // age = undifined
console.log(getUserInfoDetails("Uthpol Ghosh", 24, "India", "Kolkata", 9876543210)); 
console.log(getUserInfoDetails("Uthpol Ghosh", 24, "India", "Kolkata")); 
  
